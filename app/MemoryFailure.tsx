import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MemoryFailure = () => {
  return (
    <View style={styles.container}>
      {/* First Card */}
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.plateText}>VN 62 TPF</Text>
          <Text style={styles.statusText}>Unprocessed</Text>
        </View>
        <Text style={styles.label}>
          Time: <Text style={styles.value}>2025-04-09 07:46:53</Text>
        </Text>
        <Text style={styles.label}>
          Location:{" "}
          <Text style={styles.value}>
            Focșani, Str. Cuza Vodă 56, Focșani 627057, Romania
          </Text>
        </Text>
      </View>

      {/* Second Card */}
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.plateText}>28430046</Text>
          <Text style={styles.statusText}>Unprocessed</Text>
        </View>
        <Text style={styles.label}>
          Time: <Text style={styles.value}>2025-04-09 04:03:12</Text>
        </Text>
        <Text style={styles.label}>
          Location:{" "}
          <Text style={styles.value}>
            Adnan Menderes, Balıkesir Edremit Yolu, 10010 Karesi/Balıkesir,
            Türkiye
          </Text>
        </Text>
      </View>

      {/* Third Card */}
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.plateText}>28430046</Text>
          <Text style={styles.statusText}>Unprocessed</Text>
        </View>
        <Text style={styles.label}>
          Time: <Text style={styles.value}>2025-04-09 04:03:07</Text>
        </Text>
        <Text style={styles.label}>
          Location:{" "}
          <Text style={styles.value}>
            Adnan Menderes, Balıkesir Edremit Yolu, 10010 Karesi/Balıkesir,
            Türkiye
          </Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 45,
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: "#fdfdfd",
    borderRadius: 12,
    padding: 16,
    marginBottom: 14,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 2 },
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  plateText: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#000",
  },
  statusText: {
    color: "#db2663",
    fontWeight: "600",
  },
  label: {
    fontSize: 14,
    color: "#555",
    marginTop: 2,
  },
  value: {
    color: "#000",
  },
});

export default MemoryFailure;
