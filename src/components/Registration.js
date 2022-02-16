import axios from "axios";
import React, { useState, Fragment } from "react";
import { View, Text } from "react-native";
import { Button, Input, Loading, TextLink } from "./common";
import deviceStorage from "../services/deviceStorage";

const Registration = ({authSwitch, newJWT}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [jwt, setJwt] = useState('');

    const { form, section, errorTextStyle } = styles;

    const registerUser = ( ) => {
        setError('');
        setLoading(true)

        axios.post('http://127.0.0.1:8000/api/register',{
            name,
            email,
            password
        })
        .then((response) => {
            console.log(response.data);
            const token = response.data.cookie.value;
            setJwt(jwt);
           // newJWT(jwt);
            deviceStorage.saveItem("id_token",token );
        })
        .catch((error) => {
             console.log(error);  
             onRegistrationFail(); 
        })
    }
    const onRegistrationFail = () =>  {
        setError('Registration Failed');
        setLoading(false);
    }

    return(
        <Fragment>
            <View style={form}>
            <View style={section}>
                <Input 
                placeholder="name"
                label="Name"
                value={name}
                onChangeText={name => setName(name)}
                />
            </View>
            <View style={section}>
                <Input 
                placeholder="user@gmail.com"
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

            {!loading 
                ? <Button onPress={() => registerUser()}>Register</Button>
                : <Loading size="large" />  
            }
        </View>
        <TextLink onPress={authSwitch}>
            Already have an account? Log in!        
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

export { Registration };