import React, { useEffect, useState } from "react";
import { AppRegistry, Text } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import theme from "./CustomProperties/Theme";
const { expo } = require("./app.json");
import MainScreen from "./Screens/MainScreen";

const appName = expo.name;

export default function App() {

  return (
    <PaperProvider theme={theme}>
      <MainScreen />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => App);