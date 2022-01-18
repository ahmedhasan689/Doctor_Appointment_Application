import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, FlatList, KeyboardAvoidingView, ScrollView, Alert } from 'react-native';
import axios from 'axios';

export default function Profile() {

    const [ profile, setProfile ] = useState([]);

    useEffect( () => {
        axios.get('https://doctors-app-api-iugaza.herokuapp.com/api/users/profile')
        .then( (resposne) => {
            setProfile(resposne.data)
        } )
        .catch(error => console.log(error.message));
    }, []);

    return <View style={styles.container}>
        <View style={styles.profileContent}>
            <Image style={styles.imageProfile} source={require('./../assets/Group.png')} />
            <Text style={styles.profileName}>{profile.name}</Text>
            <Text style={styles.profileEmail}>{profile.email}</Text>
        </View>
        <View style={styles.tasksList}>
            <Text>Ahmed</Text>
        </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%"
    },
    profileContent: {
        flex: 4,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#555fd2',
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20,
    },
    tasksList: {
        flex: 6,
    },
    imageProfile: {
        height: 100,
        width: 100
    },
    profileName: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 15,
    },
    profileEmail: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    }

})