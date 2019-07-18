import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Start from "./src/Start";

export default function App() {
  return (
    <View style={styles.container}>
      <Start />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 60
  }
});
