import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Button, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {Hoshi} from 'react-native-textinput-effects';

export class Register extends Component {
  constructor () {
    super ();
    this.state = {
      credentials: {
        username: '',
        password: '',
      },
      usernameError: '',
      passwordError: '',
    };
  }

  handleChange (text, field) {
    let newcredentials = Object.assign (this.state.credentials);
    newcredentials[field] = text;
    this.setState ({credentials: newcredentials});
  }
  handleError (field) {
    let user = this.state.credentials.username;
    let pass = this.state.credentials.password;
    if (field == 'Username') {
      if (user == '') {
        this.setState ({usernameError: `${field} is required!`});
      } else if (user.length < 4) {
        this.setState ({
          usernameError: 'A minimum of 4 characters is required!',
        });
      } else {
        this.setState ({usernameError: ''});
      }
    } else {
      if (pass == '') {
        this.setState ({passwordError: 'Password is required!'});
      } else if (pass.length < 6) {
        this.setState ({
          passwordError: 'A minimum of 6 characters is required!',
        });
      } else {
        this.setState ({passwordError: ''});
      }
    }
  }
  async handleRegister () {
    await this.handleError ('Username');
    this.handleError ('Password');
    if (this.state.usernameError !== '' || this.state.passwordError !== '') {
      return false;
    } else {
      // alert (JSON.stringify (this.state.credentials));
      return (
        fetch ('http://196.188.240.255:9000/signup/', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify ({
            username: this.state.credentials.username,
            password: this.state.credentials.password,
          }),
        })
          .then (res => res.json)
          // .then (res => alert (res))
          .catch (err => alert (err.message))
      );
    }
  }
  render () {
    return (
      <View
        // onPress={() => this.register()}
        style={{
          height: 100 + '%',
          width: 100 + '%',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 20,
        }}
      >
        <Text> Register PAGE </Text>
        <Hoshi
          value={this.state.credentials.username}
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={name => this.handleChange (name, 'username')}
          onBlur={() => this.handleError ('Username')}
          placeholder="Username"
          required
          style={styles.input}
        />
        {this.state.usernameError
          ? <Text style={{color: 'red'}}>{this.state.usernameError}</Text>
          : <View />}
        <Hoshi
          value={this.state.credentials.password}
          autoCapitalize="none"
          onChangeText={password => this.handleChange (password, 'password')}
          onBlur={() => this.handleError ('Password')}
          secureTextEntry
          required
          autoCorrect={false}
          placeholder="Password"
          style={styles.input}
        />
        {this.state.passwordError
          ? <Text style={{color: 'red', marginBottom: 10}}>
              {this.state.passwordError}
            </Text>
          : <View />}
        <Button title="Register" onPress={() => this.handleRegister ()} />
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  input: {
    height: 40,
    width: 100 + '%',
    paddingHorizontal: 50,
    marginBottom: 20,
    borderBottomColor: '#ccc',
  },
});

export default Register;
