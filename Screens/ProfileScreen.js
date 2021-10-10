import * as React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { Title } from "react-native-paper";

const ProfileRoute = () => (
  <SafeAreaView style={styles.container}>
    <Title>Profile page</Title>
  </SafeAreaView>
);
export default ProfileRoute;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
