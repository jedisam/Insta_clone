import React, { Component } from "react";
import { Text, View, TouchableOpacity, Button, StyleSheet } from "react-native";

export default ({ navigation }) => {
  return (
    <View
      style={{
        height: 100 + "%",
        width: 100 + "%",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
      
    >
      <Text> LOGIN PAGE </Text>
      <Button  title="Login" onPress={() => {
        navigation.navigate("Bottom Tabs");
      }}  />
      <View style={styles.btnContainer}>
      <Text style={styles.btn}>Don't have account?</Text>
      <Button  title="Sign Up"   onPress={() => {
        navigation.navigate("Register");
      }}   />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  btnContainer:{
    marginTop: 100,
    display:'flex',
    flexDirection: 'row',
  },
  btn:{
    marginHorizontal: 20,
    marginTop:5
  }
})
