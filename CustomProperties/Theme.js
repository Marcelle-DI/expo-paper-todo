import React from "react";
// import { configureFonts, DefaultTheme } from "react-native-paper";
// import fontConfig from "./Fonts";
import { DefaultTheme } from "react-native-paper";

const theme = {
  ...DefaultTheme,
  roundness: 30,
  colors: {
    ...DefaultTheme.colors,
    primary: "#344955",
    accent: "#F9AA33",
    text: "#4A6572",
    notification: "#232F34",
    iconColor: "#808080",
    surface: "whitesmoke",
  },
};

export default theme;
