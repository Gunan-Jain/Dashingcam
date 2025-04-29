import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Link } from "expo-router";
const AlarmCard = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Today Alarms</Text>
      <View style={styles.row}>
        <View style={styles.alarmBox}>
          <FontAwesome name="bell" size={24} color="red" />
          <Link href="/NormalAlarms">
            <Text style={styles.text}>0 Normal Alarm</Text>
          </Link>
        </View>
        <View style={styles.alarmBox}>
          <FontAwesome name="shield" size={24} color="green " />
          <Link href="/Safety">
            <Text style={styles.text}>0 Safety</Text>
          </Link>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 20,
    margin: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    maxWidth: "auto",
  },
  alarmBox: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  text: {
    marginLeft: 5,
  },
});

export default AlarmCard;
