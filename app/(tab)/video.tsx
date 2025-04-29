import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import {
  MaterialIcons,
  Entypo,
  FontAwesome,
  Feather,
} from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Video = () => {
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [activeSlot, setActiveSlot] = useState<number | null>(null);

  const handleVideoClick = async (index: number) => {
    console.log(`Clicked on video slot ${index + 1}`);
    setLoading(true);
    setActiveSlot(index);
    try {
      const token = await AsyncStorage.getItem("authToken");
      if (!token) {
        console.error("No auth token found");
        setLoading(false);
        return;
      }

      const deviceNum = "111011101117"; // You can make this dynamic if needed
      const queryParams = new URLSearchParams({
        mediaType: "1",
        channelNum: "1",
        streamType: "1",
        deviceNum: deviceNum,
      }).toString();

      const url = `http://api.hetuv2x.com/vehicle-openapi/video/monitor/realtimeUrl?${queryParams}`;

      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: token,
        },
      });

      const json = await response.json();

      if (json.code === 200 && json.data) {
        console.log("Video URL:", json.data);
        setVideoUrl(json.data); // Set video URL to display
      } else {
        console.error("API Error:", json.message);
      }
    } catch (error) {
      console.error("Error fetching video:", error);
    } finally {
      setLoading(false);
    }
  };

  const renderVideoSlots = () => {
    return Array(3)
      .fill(null)
      .map((_, index) => (
        <TouchableOpacity
          key={index}
          style={styles.videoBox}
          onPress={() => handleVideoClick(index)}
        >
          <Text style={styles.noVideoText}>No Video</Text>
        </TouchableOpacity>
      ));
  };

  return (
    <View style={styles.container}>
      <View style={styles.gridContainer}>{renderVideoSlots()}</View>

      <View style={styles.controlBar}>
        <Entypo name="controller-play" size={28} color="white" />
        <MaterialIcons name="volume-off" size={28} color="white" />
        <FontAwesome name="microphone-slash" size={28} color="white" />
        <Feather name="map-pin" size={28} color="white" />
        <Feather name="sliders" size={28} color="white" />
        <Feather name="smartphone" size={28} color="white" />
      </View>
    </View>
  );
};

const screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  gridContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  videoBox: {
    width: screenWidth - 10,
    height: screenWidth / 2 - 10,
    margin: 5,
    backgroundColor: "#111",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#333",
  },
  noVideoText: {
    color: "#aaa",
    fontSize: 16,
  },
  controlBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: "#444",
  },
});

export default Video;
