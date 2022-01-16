import React from "react";
import { image, View, Text, StyleSheet } from 'react-native';

export default function Welcome(props) {


    return <View style={styles.container}>
        <View style={styles.innerContainer}>
            <Image style={ styles.welcomeImage } source={ require("../assets/illustration.png") } />
        </View>
    </View>

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    innerContainer: {
        flex: 1,
        flexDirection: 'column',
    },
    welcomeImage: {
        height: 350,
        width: 350,
    },
})