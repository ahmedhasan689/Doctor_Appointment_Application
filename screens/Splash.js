import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, KeyboardAvoidingView, ScrollView, Alert } from 'react-native';



// const CustomButton = (props) => {

//     return (
//         <TouchableOpacity
//             onPress={props.onPress}
//             activeOpacity={0.8}
//             style={styles.customButton}
//         >
//             <Text style={styles.customButtonText}>Sign Up</Text>
//         </TouchableOpacity>
//     )

// }

const CustomTextInput = (props) => {


    return (
        <View>
            <Text style={styles.inputLabel}>{props.label}</Text>
            <Image
                resizeMode='contain'
                style={styles.textInputIcon}
                source={props.icon} />
            <TextInput
                {...props}
                // placeholder='demo.mail@gmail.com'
                style={styles.textLabel}
            />
        </View>
    )

}






export default function App() {

  

    return (
        
                <View style={styles.container}>
                    <Image 
                    style={styles.illustration}
                    source={require('../assets/illustration.png')}/>
                    <Text style={styles.topText}>
                        Chat With Doctor
                    </Text>
                    <Text style={styles.bottomText}>
                        Book an appointment with doctor Chat with doctor via appointment letter $ get consultant.
                    </Text>
                    <View>
                        <TouchableOpacity
                        activeOpacity={0.8} 
                        style={styles.button}>
                            <Text style={styles.buttonText}>
                                Start
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

          
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        // justifyContent: 'center',
    },
    illustration: {
        marginTop: 125,
        borderColor: '#68E1FD', 
        borderWidth: 3,
    },
    topText: {
        fontWeight: 'bold',
        fontSize: 22,
        marginTop: 15,
    }, 
    bottomText: {
        marginTop: 15,
        color: '#8C8FA5',
        fontSize: 17,
        flexWrap: 'wrap',
        width: '82%',
        textAlign: 'center'
    },
    button: {
        marginTop: 70,
        borderRadius: 8,
        width: 300,
        height: 40,
        backgroundColor: '#555FD2'
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#FFF',
        alignItems: 'center',
        margin: 9,
        justifyContent: 'center',
        textAlign: 'center',
    }
});
