import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, KeyboardAvoidingView, ScrollView, Alert } from 'react-native';
import { borderColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
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
                        style={{ right: 12, top: 12, zIndex:2, position: 'absolute' }}
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
        marginTop: 0,
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
        marginTop: 10,
        marginBottom: 10,
        width: 340,
        fontSize: 16,
    },
    searchImage: {
        position: "absolute",
        zIndex: 2,
        marginRight: 4,
        top: 155,
        left: 320,
    },
    searchIcon: {
        width: 50,
        height: 50,
        top: -60,
        right: 145,
        backgroundColor: '#555FD2',
        borderRadius: 5,
        borderColor: '#fff',
        borderWidth: 1
    }





})