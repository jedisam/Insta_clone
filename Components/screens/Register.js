import React, { Component } from "react";
import { View, Text, TouchableOpacity, Button, StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export class Register extends Component {
  constructor() {
    super();
    this.state = {
      credentials: {
        username: "",
        password: "",
      },
    };
  }
  register() {
    //send credentials to server
    //if success
    alert("Hey There");
    // else display error
  }
  handleChange(text, field) {
    let newcredentials = Object.assign(this.state.credentials);
    newcredentials[field] = text;
    this.setState({ credentials: newcredentials });
  }
  handleRegister() {
    alert(this.state.username);
  }
  render() {
    return (
      <View
        onPress={() => this.register()}
        style={{
          height: 100 + "%",
          width: 100 + "%",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text> Register PAGE </Text>
        <TextInput
          value={this.state.username}
          autoCorrect={false}
          onChangeText={(name) => this.handleChange(name, "username")}
          placeholder="Username"
          style={styles.input}
        />
        <TextInput
          value={this.state.password}
          onChangeText={(password) => this.handleChange(password, "password")}
          secureTextEntry
          autoCorrect={false}
          placeholder="Password"
          style={styles.input}
        />
        <Button title="Register" onPress={() => this.handleRegister} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 100 + "%",
    paddingHorizontal: 50,
    marginBottom: 10,
    borderColor: "black",
    borderWidth: 1,
  },
});

export default Register;
