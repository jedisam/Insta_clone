import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";

export default ({navigation}) =>{
  
    return (
      <TouchableOpacity
        style={{
          height: 100 + "%",
          width: 100 + "%",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() => {
          navigation.navigate("MainFeed");
        }}
      >
        <Text> LOGIN PAGE </Text>
      </TouchableOpacity>
    );

}
