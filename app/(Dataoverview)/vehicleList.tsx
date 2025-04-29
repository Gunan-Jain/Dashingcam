import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const vehicleData = [
  {
    id: "652400784",
    time: "2025-03-20 18:27:57",
    location: "RUMB3356, 3356 Ain Al Waghra, 6409, Riyadh, Saudi Arabia",
  },
  {
    id: "28430034",
    time: "2025-01-09 15:38:23",
    location: "Mehmet Akif, Süphan Sk. No:36, Küçükçekmece/Istanbul, Türkiye",
  },
  {
    id: "28430046",
    time: "2025-03-20 19:49:42",
    location:
      "Adnan Menderes, Balikesir Edremit Yolu, Karesi/Balikesir, Türkiye",
  },
  {
    id: "VN 62 TPF",
    time: "2025-03-20 18:13:43",
    location: "Strada Mărășești 73, Focșani, Romania",
  },
  {
    id: "VN 17 TPF",
    time: "2025-03-20 19:52:25",
    location: "Drumul Binelui 56c, București, Romania",
  },
];

const vehicleList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={vehicleData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.id}>{item.id}</Text>
            <Text style={styles.time}>{item.time}</Text>
            <Text style={styles.location}>{item.location}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 10,
  },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    marginVertical: 5,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  id: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  time: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },
  location: {
    fontSize: 14,
    color: "#444",
    marginTop: 4,
  },
});

export default vehicleList;
