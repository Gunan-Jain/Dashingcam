import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";
const StatsCard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Data</Text>
      <View style={styles.statsRow}>
        <Link href="/vehicleList" style={styles.stat}>
          9 Total
        </Link>
        <Link
          href="/vehicleListOnline"
          style={[styles.stat, { color: "green" }]}
        >
          7 Online
        </Link>
        <Link
          href="/vehicleListOffline"
          style={[styles.stat, { color: "yellow" }]}
        >
          2 Offline
        </Link>
        <Link href="/AlarmvehicleList" style={[styles.stat, { color: "red" }]}>
          0 Alarm
        </Link>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1E88E5",
    padding: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    height: 130,
    display: "flex",
    justifyContent: "center",
    gap: "50",
  },
  title: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  stat: {
    color: "#fff",
    fontSize: 16,
  },
});

export default StatsCard;
