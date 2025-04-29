import { Tabs } from "expo-router";

const DataLayout = () => {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="vehicleList" options={{ title: "vehicleList" }} />
      <Tabs.Screen
        name="vehicleListOnline"
        options={{ title: "vehicleListOnline" }}
      />
      <Tabs.Screen
        name="vehicleListOffline"
        options={{ title: "vehicleListOffline" }}
      />
      <Tabs.Screen
        name="AlarmvehicleList"
        options={{ title: "AlarmVehicleList" }}
      />
    </Tabs>
  );
};

export default DataLayout;
