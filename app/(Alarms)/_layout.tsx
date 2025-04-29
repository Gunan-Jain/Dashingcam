import { Tabs } from "expo-router";

const AlarmLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen name="NormalAlarms" options={{ title: "Alarms" }} />
      <Tabs.Screen name="Safety" options={{ title: "Safety" }} />
    </Tabs>
  );
};

export default AlarmLayout;
