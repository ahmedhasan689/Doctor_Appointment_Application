import React from "react";
import { View, Text, Button, TouchableOpacity } from 'react-native';
import * as SecureStore from 'expo-secure-store';

export default function Logout(props) {
    return <View>
        <Text>
            Welcome User
        </Text>
        <Button 
            onPress={ () => {
                SecureStore.deleteItemAsync("token")
                .then( () => {
                    props.navigation.navigate("login")    
                } )
                .catch(error => console.log(error.message));
            }}
            title="Logout"
            styleButton={{
                width: 50
            }}
            styleText={{
                fontSize: 50
            }}
        />


    </View>
}