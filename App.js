import React from "react";
import { View, Text, StyleSheet } from "react-native";
import AppNavigator from "./AppNavigator/AppNavigator";
import DrawerNavigator from "./AppNavigator/DrawerNavigator";

const App = props => {
  return(
    <DrawerNavigator/>
  )
};

const styles = StyleSheet.create({});
export default App;