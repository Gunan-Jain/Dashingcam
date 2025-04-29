import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Safetypng = require("../../assets/images/safety.png");

const Safety = () => {
  return (
    <View style={styles.container}>
      {/* Empty state */}
      <View style={styles.emptyContainer}>
        <Image
          source={Safetypng} // Replace with your local asset or use URI
          style={styles.image}
        />
        <Text style={styles.emptyText}>Empty~</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: 10,
    resizeMode: "contain",
  },
  emptyText: {
    fontSize: 16,
    color: "#666",
  },
});

export default Safety;
