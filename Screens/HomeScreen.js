import * as React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { Title, useTheme } from "react-native-paper";

const HomeRoute = () => {
  const { colors } = useTheme();

  return (
    <SafeAreaView style={styles.container}>
      <Title
        style={
          (styles.welcome,
          { color: colors.primary },
          { fontFamily: "work-sans-bold" })
        }
      >
        Home page
      </Title>
    </SafeAreaView>
  );
};

export default HomeRoute;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,
  },
});
