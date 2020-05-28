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
      >
        <Text> Profile Page PAGE </Text>
      </TouchableOpacity>
    );

}
