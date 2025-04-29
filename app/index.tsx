import React, { useState } from "react";
import { Link } from "expo-router";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

import axios from "axios";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Switch,
  Button,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
const Logojpg = require("../assets/images/Logo.jpg");

const login = () => {
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
    loginButton: {
      backgroundColor: "#007BFF",
      paddingVertical: 12,
      width: "80%",
      alignItems: "center",
      borderRadius: 8,
      marginVertical: 15,
    },
    loginText: {
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
    username: "",
    email: "",
    password: "",
  });

  const [agree, setAgree] = useState(false);
  const [ipAddress, setIpAddress] = useState("");

  const handleChange = (field: keyof typeof formData, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = () => {
    if (
      !formData.username ||
      !formData.email ||
      !formData.password ||
      ipAddress !== "1"
    ) {
      console.warn("Please fill all fields or Fill out correct IP Adress.");
      return;
    }

    if (!agree) {
      console.warn("You must agree to terms before continuing.");
      return;
    }

    axios
      .post("http://192.168.1.2:5009/login", formData)
      .then(async (result) => {
        console.log("Login successful:", result.data);
        if (result.data === "Success") {
          try {
            const response = await axios.post(
              "https://api.hetuv2x.com/vehicle-openapi/sys/login",
              {
                appCid: "8d538bc8c833454b81366d0f2289e4a2",
                appSecret: "22e3cd08051c3a82e75f0e369d9e0126",
              },
              {
                headers: {
                  "Content-Type": "application/json",
                  Accept: "application/json",
                },
              }
            );

            if (response.data.code === 200) {
              const token = response.data.data.Authorization;
              const expiresIn = response.data.data.expiresIn;

              await AsyncStorage.setItem("authToken", token);

              console.log("Login successful. Token:", token);
              router.replace("/home");
            } else {
              console.warn("Login failed:", result.data);
            }
          } catch (error) {
            console.error("Hetu API login error:", error);
          }
        }
      })
      .catch((err) => console.log("Login error:", err));
  };

  return (
    <View style={styles.container}>
      <Image source={Logojpg} style={styles.logo} />

      <View style={styles.inputContainer}>
        <Ionicons name="person" size={20} color="#007BFF" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={formData.username}
          onChangeText={(text) => handleChange("username", text)}
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

      <View style={styles.inputContainer}>
        <Ionicons name="globe" size={20} color="#007BFF" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="IP Address"
          value={ipAddress}
          onChangeText={setIpAddress}
        />
      </View>

      <TouchableOpacity style={styles.loginButton} onPress={handleSubmit}>
        <Text style={styles.loginText}>Login</Text>
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

      <Link
        href="/signup"
        style={{ textDecorationLine: "none", color: "blue" }}
      >
        Not Signed? Signup
      </Link>
      <Link href="/home" style={{ textDecorationLine: "none", color: "blue" }}>
        Not Signed? Signup
      </Link>
      <Text style={styles.language}>English</Text>
    </View>
  );
};

export default login;
