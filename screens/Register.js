import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, KeyboardAvoidingView, ScrollView, Alert } from 'react-native';



const CustomButton = (props) => {

    return (
        <TouchableOpacity
            onPress={props.onPress}
            activeOpacity={0.8}
            style={styles.customButton}
        >
            <Text style={styles.customButtonText}>Sign Up</Text>
        </TouchableOpacity>
    )

}

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






export default function register(props) {

    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");

    const handleOnSubmitForm = () => {
        let message = null;
        if (user.length < 5){
            message = "Your Username Should Be More Than 5 Character"
        }else if (email.trim().length < 8 || !email.includes("@")) {
            message = "Your Email Is Invalid"
        } else if (password.length < 8) {
            message = "Your Password Should Be More Than 8 Character"
        }else if(confirm != password) {
            message = "Your Password & Your Confirm Should Be The Same"
        }

        Alert.alert(
            "Login Alert",
            message
        );
    }

    return (
        <KeyboardAvoidingView>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.innerContainer}>
                        <Image style={styles.topVector} source={require("../assets/Vector1.png")} />
                        <Text style={styles.topText}>Sign Up</Text>
                        {/* <Text style={styles.welcomeText}>Welcome Back!</Text> */}
                        <Text style={styles.subText}>Sign Up To Continue</Text>

                        <View style={styles.formContainer}>

                            <CustomTextInput
                                label="Username"
                                placeholder="Masum Ahmed"
                                icon={require('../assets/icon.png')}
                                onChangeText={setUser}
                            />

                            <CustomTextInput
                                label="Email"
                                placeholder="demo.mail@gmail.com"
                                icon={require('../assets/Vector.png')}
                                keyboardType="email-address"
                                onChangeText={setEmail}
                            />

                            <CustomTextInput
                                secureTextEntry={true}
                                label="Password"
                                placeholder="********"
                                icon={require('../assets/Vector-1.png')}
                                onChangeText={setPassword}
                            />

                            <CustomTextInput
                                secureTextEntry={true}
                                label="Confirm Password"
                                placeholder="********"
                                icon={require('../assets/Vector-1.png')}
                                onChangeText={setConfirm}
                            />

                            <CustomButton onPress={handleOnSubmitForm} />
                        </View>
                        {/* Bottom Vertor */}
                        <View style={{ flexDirection: "row" }}>
                            <Image style={styles.bottomVector} source={require('../assets/vector3.png')} />
                            <Text style={styles.bottomText} >
                                Already have An Account ?
                            </Text>
                            <TouchableOpacity style={styles.bottomClick} onPress={ () => { props.navigation.navigate('login')} }>
                                <Text style={{ color: "#FFF", fontWeight: "bold" }}>Sign In</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    innerContainer: {
        flex: 1,
        width: "100%",
        padding: 20,
        alignItems: 'center',
    },
    topVector: {
        width: 390,
        height: 150,
        position: 'relative',
        marginTop: 15,
    },
    topText: {
        fontWeight: "bold",
        fontSize: 20,
        position: 'absolute',
        zIndex: 200,
        color: "#FFF",
        top: 90
    },
    welcomeText: {
        color: "#555FD2",
        fontWeight: "bold",
        fontSize: 22,
    },
    subText: {
        fontWeight: "bold",
        fontSize: 15,
    },
    // Start Login Form Style
    formContainer: {
        flexDirection: "column",
        width: "95%",
        marginTop: 20,
    },
    inputLabel: {
        fontWeight: "bold",
        fontSize: 16,
        color: "#717881"
    },
    textLabel: {
        backgroundColor: "#F3F4F8",
        borderRadius: 8,
        height: 45,
        paddingRight: 35,
        paddingLeft: 35,
        marginTop: 3,
        marginBottom: 10,
        // marginBottom: 2,
        fontSize: 16,
    },
    textInputIcon: {
        position: "absolute",
        zIndex: 2,
        marginRight: 4,
        top: 40,
        left: 280
    },
    // Custom Button
    customButton: {
        marginTop: 6,
        padding: 12,
        backgroundColor: "#555FD2",
        borderRadius: 8
    },
    customButtonText: {
        color: "#FFFFFF",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 16,
    },
    // Bottom Vector Style
    bottomVector: {
        width: 390,
        height: 150,
        position: 'relative',
        // zIndex: 10,
        marginTop: 10
    },
    bottomText: {
        fontWeight: "bold",
        fontSize: 14,
        position: 'absolute',
        color: "#fff",
        top: 90,
        left: 130,
    },
    bottomClick: {
        fontWeight: "bold",
        fontSize: 14,
        position: 'absolute',
        color: "#fff",
        top: 90,
        left: 80,
    }
});
