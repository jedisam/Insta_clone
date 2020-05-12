import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Button, StyleSheet} from 'react-native';
import {Hoshi} from 'react-native-textinput-effects';

export default class Login extends Component {
  constructor () {
    super ();
    this.state = {
      credentials: {
        username: '',
        password: '',
      },
      usernameError: '',
      passwordError: '',
      status: '',
      errLogin: '',
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
      } else {
        this.setState ({passwordError: ''});
      }
    }
  }

  handleRegister () {
    this.props.navigation.navigate ('Register');
  }

  async handleLogin () {
    await this.handleError ('Username');
    this.handleError ('Password');
    if (this.state.usernameError !== '' || this.state.passwordError !== '') {
      return false;
    } else {
      this.setState ({errLogin: ''});
      await fetch ('http://ecd22a26.ngrok.io/login', {
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
        .then (res => res.json (), err=>alert(err))
        .then (res => {
          this.setState ({status: res})
          if(this.state.status==='success'){
            this.props.navigation.navigate ('Bottom Tabs')
          } else {
            return false
          }
        },err=>alert('Incorrect password or Username  '))
    }
  }

  render () {
    return (
      <View
        style={{
          height: 100 + '%',
          width: 100 + '%',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 20,
        }}
      >
        <Text> Login PAGE </Text>
        {this.state.errLogin
          ? <Text style={{color: 'red'}}>
              {this.state.errLogin} {this.state.status}
            </Text>
          : <View />}
        <Hoshi
          value={this.state.credentials.username}
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
        <TouchableOpacity
          onPress={() => this.handleLogin ()}
          style={{
            padding: 10,
            backgroundColor: '#9ddbf5',
            width: 100 + '%',
            borderRadius: 10,
          }}
        >
          <Text
            style={{
              textAlign: 'center',
              color: '#fff',
              fontSize: 20,
              fontWeight: 'bold',
            }}
          >
            Log In
          </Text>
        </TouchableOpacity>
        <View
          style={{
            marginTop: 50,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}
        >
          <Text style={{paddingHorizontal: 12, fontSize: 15}}>
            Don't have an account?
          </Text>
          <TouchableOpacity
            onPress={() => {
              this.handleRegister ();
            }}
          >
            <Text style={{color: 'blue', fontSize: 15}}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  btnContainer: {
    marginTop: 100,
    display: 'flex',
    flexDirection: 'row',
  },
  input: {
    height: 40,
    width: 100 + '%',
    paddingHorizontal: 50,
    marginBottom: 20,
    borderBottomColor: '#ccc',
  },
  btn: {
    marginHorizontal: 20,
    marginTop: 5,
  },
});
