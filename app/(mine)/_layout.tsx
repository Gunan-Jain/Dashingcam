import { Tabs } from "expo-router";

const mineLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen name="useragreement" options={{ title: "User Agreement" }} />
    </Tabs>
  );
};

export default mineLayout;
