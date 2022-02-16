import React, { useState, Fragment } from "react";
import { View, Text } from "react-native";
import { Button, Input, Loading, TextLink } from "./common";
import axios from "axios";
import deviceStorage from "../services/deviceStorage";

const Login = ({ authSwitch, newJWT }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const { form, section, errorTextStyle } = styles;

    const loginUser = () => {
        setError('');
        setLoading(true);
        axios.post('http://127.0.0.1:8000/api/login',{
            email,
            password
        })
        .then((response) => {
            console.log(response.data.cookie.value);
            const token = response.data.cookie.value;
            deviceStorage.saveItem("id_token",token);
           // newJWT(token)
            setLoading(false);

        })
        .catch((error) => {
            console.log("error", error)
            onLoginFail();
        })

    }

    const onLoginFail = () =>  {
          setError('Registration Failed');
          setLoading(false);
      }
    return(
        <Fragment>
        <View style={form}>
          <View style={section}>
            <Input
              placeholder="user@email.com"
              label="Email"
              value={email}
              onChangeText={email => setEmail(email)}
            />
          </View>

          <View style={section}>
            <Input
              secureTextEntry
              placeholder="password"
              label="Password"
              value={password}
              onChangeText={password => setPassword(password)}
            />
          </View>

          <Text style={errorTextStyle}>
            {error}
          </Text>

          {!loading ?
            <Button onPress={() => loginUser() }>
              Login
            </Button>
            :
            <Loading size='large' />}

        </View>
        <TextLink onPress={authSwitch}>
          Don't have an account? Register!
        </TextLink>
      </Fragment>

    )
}

const styles = {
    form: {
      width: '100%',
      borderTopWidth: 1,
      borderColor: '#ddd',
    },
    errorTextStyle: {
        alignSelf: 'center',
        fontSize: 18,
        color: 'red'
      },
    section: {
      flexDirection: 'row',
      borderBottomWidth: 1,
      backgroundColor: '#fff',
      borderColor: '#ddd',
    },
    errorTextStyle: {
        alignSelf: 'center',
        fontSize: 18,
        color: 'red'
      },
  };

export { Login }