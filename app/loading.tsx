import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { useEffect } from "react";
import { ActivityIndicator, View } from "react-native";

export default function Loading() {
  useEffect(() => {
    const checkToken = async () => {
      try {
        const token = await AsyncStorage.getItem("user-token");
        if (token) {
          router.replace("/doar");
        } else {
          router.replace("/login");
        }
      } catch (e) {
        router.replace("/login");
      }
    };

    checkToken();
  }, []);

  return <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}><ActivityIndicator size="large" /></View>;
}