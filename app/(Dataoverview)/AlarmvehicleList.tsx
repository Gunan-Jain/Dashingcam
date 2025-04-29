import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const alarmVehicles = [
  {
    id: "1",
    type: "car-alarm",
    name: "28430034",
    time: "2025-01-09 15:38:23",
    location:
      "Mehmet Akif, Süphan Sk. No:36, 34307 Küçükçekmece/İstanbul, Türkiye",
  },
  {
    id: "2",
    type: "bus-alarm",
    name: "VN 62 TPF",
    time: "2025-03-21 15:16:58",
    location: "Str. Pictor Nicolae Grigorescu 32, Focșani 620172, Romania",
  },
];

const getAlarmIcon = (type: string): string => {
  switch (type) {
    case "car-alarm":
      return "🚨🚗"; // Car Alarm Icon
    case "bus-alarm":
      return "🚨🚌"; // Bus Alarm Icon
    default:
      return "⚠"; // General Alarm Icon
  }
};

const AlarmVehicleList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>🚨 Alarm Vehicles</Text>
      <FlatList
        data={alarmVehicles}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.vehicleItem}>
            <Text style={styles.icon}>{getAlarmIcon(item.type)}</Text>
            <View>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.time}>{item.time}</Text>
              <Text style={styles.location}>{item.location}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  vehicleItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    marginBottom: 8,
    backgroundColor: "#fef2f2",
    borderRadius: 8,
  },
  icon: {
    fontSize: 30,
    marginRight: 16,
  },
  name: {
    fontSize: 18,
    fontWeight: "600",
  },
  time: {
    color: "gray",
  },
  location: {
    color: "#374151",
  },
});

export default AlarmVehicleList;
