import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types"; 
import api from "../services/api"; 
import { Button } from "react-native";


type NavigationProp = NativeStackNavigationProp<RootStackParamList, "HomeScreen">;

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  useEffect(() => {
    const fetchTest = async () => {
      try {
        const res = await api.get("/trips/test");
        console.log("Backend response:", res.data);
      } catch (err) {
        if (err instanceof Error) {
          console.error("Error contacting backend:", err.message);
        } else {
          console.error("Error contacting backend:", err);
        }
      }
    };

    fetchTest();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trip Watchdog is here to ensure you return safely</Text>
      <Button title="Start New Trip" onPress={() => navigation.navigate("TripSetup")} />
    </View>


  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default HomeScreen;
