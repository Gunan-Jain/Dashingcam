import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";

const Position = () => {
  return (
    <View style={styles.container}>
      {/* Google Map */}
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 37.7749, // Example coordinates (San Francisco)
          longitude: -122.4194,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      />

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Plate Num./Device Num./SIM"
          style={styles.searchInput}
        />
        <TouchableOpacity style={styles.filterButton}>
          <FontAwesome name="filter" size={20} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Left Sidebar Buttons */}
      <View style={styles.leftButtons}>
        <Text style={styles.statusBox}>0{"\n"}Running</Text>
        <TouchableOpacity style={styles.iconButton}>
          <FontAwesome name="car" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <MaterialIcons name="gps-fixed" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Right Sidebar Buttons */}
      <View style={styles.rightButtons}>
        <TouchableOpacity style={styles.roundButton}>
          <Text>21</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.roundButton}>
          <MaterialIcons name="signal-cellular-alt" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.roundButton}>
          <MaterialIcons name="view-comfy" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.roundButton}>
          <Text>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.roundButton}>
          <Text>-</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Navigation Bar */}

      {/* Emergency Button */}
      <TouchableOpacity style={styles.emergencyButton}>
        <MaterialIcons name="notifications-active" size={28} color="red" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { ...StyleSheet.absoluteFillObject },

  searchContainer: {
    position: "absolute",
    top: 10,
    left: 10,
    right: 10,
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 20,
    alignItems: "center",
  },
  searchInput: { flex: 1, padding: 5 },
  filterButton: { padding: 5 },

  leftButtons: {
    position: "absolute",
    left: 10,
    top: 80,
    alignItems: "center",
  },
  statusBox: {
    backgroundColor: "#fff",
    padding: 8,
    textAlign: "center",
    borderRadius: 5,
  },
  iconButton: { marginVertical: 10 },

  rightButtons: {
    position: "absolute",
    right: 10,
    top: 80,
    alignItems: "center",
  },
  roundButton: {
    backgroundColor: "#fff",
    padding: 8,
    borderRadius: 30,
    marginVertical: 5,
  },

  bottomNav: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#fff",
    paddingVertical: 10,
  },
  navButton: { alignItems: "center" },

  emergencyButton: {
    position: "absolute",
    bottom: 70,
    right: 20,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 30,
  },
});

export default Position;
