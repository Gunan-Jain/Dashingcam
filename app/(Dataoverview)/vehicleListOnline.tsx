import React from "react";
import { View, Text, FlatList } from "react-native";

const vehicles = [
  {
    id: "1",
    type: "bus-red",
    name: "VN 62 TPF",
    time: "2025-03-21 15:16:58",
    location: "Str. Pictor Nicolae Grigorescu 32, Focșani 620172, Romania",
  },
  {
    id: "2",
    type: "bus-blue",
    name: "VN 17 TPF",
    time: "2025-03-21 16:17:20",
    location: "Drumul Binelui 56c, București, Romania",
  },
  {
    id: "3",
    type: "car-green",
    name: "PTKY-12",
    time: "2025-03-21 09:16:45",
    location: "Shughnon, Tajikistan",
  },
  {
    id: "4",
    type: "taxi-yellow",
    name: "PTPC-15",
    time: "2025-03-21 10:16:45",
    location: "Roshtqala, Tajikistan",
  },
  {
    id: "5",
    type: "bus-blue",
    name: "BZ 10 AHU",
    time: "2025-03-21 15:16:45",
    location: "Șoseaua Pogonele 5, Buzău 120204, Romania",
  },
];

const getVehicleIcon = (type: string): string => {
  switch (type) {
    case "bus-red":
      return "🚌"; // Red Bus Icon
    case "bus-blue":
      return "🚍"; // Blue Bus Icon
    case "car-green":
      return "🚗"; // Green Car Icon
    case "taxi-yellow":
      return "🚕"; // Yellow Taxi Icon
    default:
      return "🚘"; // Default Car Icon
  }
};

const vehicleListOnline = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "white", padding: 16 }}>
      <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 16 }}>
        Online Vehicles
      </Text>
      <FlatList
        data={vehicles}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              padding: 16,
              marginBottom: 8,
              backgroundColor: "#f3f4f6",
              borderRadius: 8,
            }}
          >
            <Text style={{ fontSize: 24, marginRight: 16 }}>
              {getVehicleIcon(item.type)}
            </Text>

            <View>
              <Text style={{ fontSize: 18, fontWeight: "600" }}>
                {item.name}
              </Text>
              <Text style={{ color: "gray" }}>{item.time}</Text>
              <Text style={{ color: "#374151" }}>{item.location}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default vehicleListOnline;
