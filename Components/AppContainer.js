import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Appbar, FAB } from "react-native-paper";
export default function App() {
  const MORE_ICON = Platform.OS === "ios" ? "dots-horizontal" : "dots-vertical";

  return (
    <>
      <Appbar.Header>
        <Appbar.Content
          title="Cobra Kai ToDo App"
          subtitle={"Follow the methods of the master..."}
        />
        <Appbar.Action icon="magnify" onPress={() => {}} />
        <Appbar.Action icon={MORE_ICON} onPress={() => {}} />
      </Appbar.Header>
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>

        <StatusBar icon="rocket" style="auto" />
      </View>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={containerStyle}
        >
          <Text>Example Modal. Click outside this area to dismiss.</Text>
        </Modal>
      </Portal>
      <FAB style={styles.fab} medium icon="plus" onPress={showModal} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
  top: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
  },
  bottom: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
  },
});
