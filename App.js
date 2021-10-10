import React, { useEffect, useState } from "react";
import { AppRegistry } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import theme from "./CustomProperties/Theme";

import MainScreen from "./Screens/MainScreen";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

const appName = "paper todo";

const customFonts = {
  "work-sans": require("./assets/fonts/WorkSans-Regular.ttf"),
  "work-sans-semibold": require("./assets/fonts/WorkSans-SemiBold.ttf"),
  "work-sans-bold": require("./assets/fonts/WorkSans-Bold.ttf"),
};

export default function App(customFonts) {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const _loadFontsAsync = async (customFonts) => {
    try {
      await Font.loadAsync(customFonts);
      setFontsLoaded(true);
    } catch (error) {
      console.log(error);
    }
  };

  _loadFontsAsync(customFonts);

  if (!fontsLoaded) {
    return (
      <PaperProvider theme={theme}>
        <MainScreen />
      </PaperProvider>
    );
  } else {
    return <AppLoading />;
  }
}

AppRegistry.registerComponent(appName, () => App);
