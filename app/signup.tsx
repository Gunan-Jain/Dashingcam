import React, { useState } from "react";
import { Link } from "expo-router";
import { useRouter } from "expo-router";

import axios from "axios";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Switch,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
const Logojpg = require("../assets/images/Logo.jpg");

const Signup = () => {
  const router = useRouter();
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#FFFFFF",
    },
    logo: {
      width: 180,
      height: 120,
      marginBottom: 30,
    },
    inputContainer: {
      flexDirection: "row",
      alignItems: "center",
      width: "80%",
      borderWidth: 1,
      borderColor: "#ccc",
      borderRadius: 8,
      paddingHorizontal: 10,
      marginVertical: 10,
    },
    icon: {
      marginRight: 10,
    },
    input: {
      flex: 1,
      height: 40,
    },
    signUpButton: {
      backgroundColor: "#007BFF",
      paddingVertical: 12,
      width: "80%",
      alignItems: "center",
      borderRadius: 8,
      marginVertical: 15,
    },
    signUpText: {
      color: "#FFFFFF",
      fontSize: 16,
      fontWeight: "bold",
    },
    agreementContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginVertical: 10,
      width: "80%",
    },
    agreementText: {
      color: "#555",
      marginLeft: 8,
      flex: 1,
    },
    link: {
      color: "#007BFF",
    },
    language: {
      marginTop: 20,
      color: "#007BFF",
    },
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [agree, setAgree] = useState(false);

  const handleChange = (field: keyof typeof formData, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.password) {
      alert("Please fill all fields.");
      return;
    }

    if (!agree) {
      alert("You must agree to terms before continuing.");
      return;
    }

    axios
      .post("http://192.168.1.2:5009/register", formData)
      .then((result) => {
        console.log("Registration successful:", result.data);
        router.replace("/");
      })
      .catch((err) => console.log("Registration error:", err));
  };

  return (
    <View style={styles.container}>
      <Image source={Logojpg} style={styles.logo} />

      <View style={styles.inputContainer}>
        <Ionicons name="person" size={20} color="#007BFF" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={formData.name}
          onChangeText={(text) => handleChange("name", text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Ionicons
          name="lock-closed"
          size={20}
          color="#007BFF"
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={formData.password}
          onChangeText={(text) => handleChange("password", text)}
          secureTextEntry
        />
      </View>

      <View style={styles.inputContainer}>
        <Ionicons name="mail" size={20} color="#007BFF" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={formData.email}
          onChangeText={(text) => handleChange("email", text)}
          keyboardType="email-address"
        />
      </View>

      <TouchableOpacity style={styles.signUpButton} onPress={handleSubmit}>
        <Text style={styles.signUpText}>Sign Up</Text>
      </TouchableOpacity>

      <View style={styles.agreementContainer}>
        <Switch
          value={agree}
          onValueChange={setAgree}
          trackColor={{ false: "#ccc", true: "#007BFF" }}
          thumbColor={agree ? "#fff" : "#f4f3f4"}
        />
        <Text style={styles.agreementText}>
          Please read and agree to{" "}
          <Text style={styles.link}>《User Agreement》</Text> and{" "}
          <Text style={styles.link}>《Privacy Policy》</Text>
        </Text>
      </View>

      <Link href="/" style={{ textDecorationLine: "none", color: "blue" }}>
        Already have account? Login here
      </Link>
      <Text style={styles.language}>English</Text>
    </View>
  );
};

export default Signup;
