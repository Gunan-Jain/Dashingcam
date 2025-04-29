import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const offlineVehicles = [
  {
    id: "1",
    type: "car-gray",
    name: "652400784",
    time: "2025-03-21 03:05:43",
    location: "RFYA2991, 2991 Dammam Branch Rd, Riyadh 13251, Saudi Arabia",
  },
  {
    id: "2",
    type: "car-parking",
    name: "28430034",
    time: "2025-01-09 15:38:23",
    location:
      "Mehmet Akif, Süphan Sk. No:36, 34307 Küçükçekmece/İstanbul, Türkiye",
  },
  {
    id: "3",
    type: "car-gray",
    name: "28430046",
    time: "2025-03-21 04:06:25",
    location:
      "Adnan Menderes, Balikesir Edremit Yolu, Karesi/Balikesir, Türkiye",
  },
  {
    id: "4",
    type: "bus-gray",
    name: "BZ 09 UMJ",
    time: "2025-03-20 08:15:38",
    location: "DJ203D 5, Buzău, Romania",
  },
];

const getVehicleIcon = (type: string): string => {
  switch (type) {
    case "car-gray":
      return "🚗"; // Gray Car Icon
    case "car-parking":
      return "🅿"; // Parking Icon
    case "bus-gray":
      return "🚌"; // Gray Bus Icon
    default:
      return "🚘"; // Default Car Icon
  }
};

const vehicleListOffline = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Offline Vehicles</Text>
      <FlatList
        data={offlineVehicles}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.vehicleItem}>
            <Text style={styles.icon}>{getVehicleIcon(item.type)}</Text>
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
    backgroundColor: "#f3f4f6",
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

export default vehicleListOffline;
