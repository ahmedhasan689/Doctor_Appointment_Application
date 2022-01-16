import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, KeyboardAvoidingView, ScrollView, Alert } from 'react-native';
import { ActivityIndicator } from 'react-native-web';
export default function home() {
    return <KeyboardAvoidingView>
        <ScrollView>

            <View style={styles.container}>
                <Text style={styles.textOne}>Find Your Desired</Text>
                <Text style={styles.textTwo}>Doctor Right Now</Text>
                <Image
                    resizeMode='contain'
                    style={styles.searchImage}
                    source={require('../assets/Vector-4.png')}
                />
                <TextInput
                    placeholder='Search'
                    style={styles.textLabel} />

                <TouchableOpacity style={ styles.searchIcon }>
                    <Image
                        resizeMode='contain'
                        style={styles.searchIcon}
                        source={require('../assets/Vector-4.png')}
                    />
                </TouchableOpacity>
            </View>
        </ScrollView>
    </KeyboardAvoidingView>
}

const styles = StyleSheet.create({

    container: {
        height: 720,
        marginTop: 30,
        flex: 1,
        backgroundColor: '#555FD2',
        alignItems: 'center',
    },
    textOne: {
        color: '#fff',
        marginTop: 80,
        fontSize: 18,
    },
    textTwo: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',
    },
    textLabel: {
        backgroundColor: "#F3F4F8",
        borderRadius: 8,
        height: 50,
        paddingRight: 35,
        paddingLeft: 35,
        marginTop: 6,
        marginBottom: 10,
        width: 340,
        fontSize: 16,
    },
    searchImage: {
        position: "absolute",
        zIndex: 2,
        marginRight: 4,
        top: 151,
        left: 320,
    },
    searchIcon: {
        fontWeight: "bold",
        // fontSize: 14,
        position: 'absolute',
        zIndex: 200,
        color: "#000",
        top: 75,
        right: 155,
        backgroundColor: '#555FD2',
        height: 50,
        width: 50,
        fontSize: 10,
    }





})