import React, { useEffect, useState } from "react";
import { useRouter } from "expo-router";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import axios from "axios";

const About = () => {
  const router = useRouter();

  const Logojpg = require("../../assets/images/Logo.jpg");
  const [username, setUsername] = useState("Loading...");
  useEffect(() => {
    axios
      .get("http://192.168.1.2:5009/getUser") // Your backend API for getting user info
      .then((response) => {
        console.log("User data:", response.data);
        if (response.data && response.data.name) {
          setUsername(response.data.name);
        } else {
          setUsername("Guest");
        }
      })
      .catch((error) => {
        console.error("Error fetching user:", error);
        setUsername("Guest");
      });
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={Logojpg} style={styles.logo} />
      <Text style={styles.title}>{username}</Text>
      <Text style={styles.subtitle}>Monitoring Center</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>About Us</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/(mine)/useragreement")}
        >
          <Text style={styles.buttonText}>User Agreement</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Privacy Policy</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    paddingTop: 40,
    backgroundColor: "#fff",
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
    resizeMode: "contain",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 30,
  },
  buttonContainer: {
    width: "80%",
  },
  button: {
    backgroundColor: "#f0f0f0",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 15,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    color: "#333",
  },
});

export default About;
