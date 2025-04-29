import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Link } from "expo-router";

const NormalAlarms = () => {
  return (
    <View style={styles.container}>
      {/* Card */}
      <Link href="/MemoryFailure">
        <View style={styles.card}>
          <Feather name="share-2" size={24} color="black" />
          <Text style={styles.cardText}>memoryFailure</Text>
          <Text style={styles.alertCount}>3</Text>
        </View>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 12,
    padding: 16,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    justifyContent: "space-between",
  },
  cardText: {
    fontSize: 16,
    flex: 1,
    marginLeft: 10,
    color: "#333",
  },
  alertCount: {
    fontSize: 16,
    color: "red",
    fontWeight: "bold",
  },
});

export default NormalAlarms;
