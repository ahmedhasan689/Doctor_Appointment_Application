import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, FlatList, KeyboardAvoidingView, ScrollView, Alert } from 'react-native';
import axios from 'axios';

export default function category(props) {

    const [categories, setCategories] = useState([]);
    useEffect(() => {
        axios.get('https://doctors-app-api-iugaza.herokuapp.com/api/categories', {
            headers: {
                Authorization: "token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWJkMTM1YjkzOWQ2NTAwMTY1NTE5MzUiLCJlbWFpbCI6ImZiMDAxOTkyQGdtYWlsLmNvbSIsIm5hbWUiOiJGYXlleiIsInBhc3N3b3JkIjoiJDJiJDEwJFYwZTNaaUNLV2l6UVVjZ0VWeDliVWV0cGNjaWp6T2cyNU9VaGNralU0anZabGEuMXBqOFphIiwiY3JlYXRlZEF0IjoiMjAyMS0xMi0xN1QyMjo0Njo1MS44NTVaIiwidXBkYXRlZEF0IjoiMjAyMS0xMi0xN1QyMjo0Njo1MS44NTVaIiwiX192IjowLCJpZCI6IjYxYmQxMzViOTM5ZDY1MDAxNjU1MTkzNSIsImlhdCI6MTY0MjM1MDQ4OSwiZXhwIjoxNjQyOTU1Mjg5fQ.5nMvqLdMhS-Sj22rYXwNmynvuTTeMiz_otajZ5p6Kcc"
            }
        })
            .then((resposne) => {
                setCategories(resposne.data.data);
            })
            .catch(error => console.log(error.message))
    }, [])


    return (
        <View style={styles.container}>

            <FlatList
                data={categories}
                renderItem={({ item, index }) => (
                    <TouchableOpacity key={index} style={styles.CatagoriesList} onPress={() => props.navigation.navigate('Catagory', { CatagoryId: item.id })}>
                        <Image style={styles.CatagoriesImage} source={{ uri: item.image, }} />
                        <Text style={styles.CatagoriesName}>{item.name}</Text>
                        <TouchableOpacity style={{ top:40, backgroundColor: '#555FD2' }}>
                            <Button 
                                title='Book Now !'
                            />
                        </TouchableOpacity>
                    </TouchableOpacity>
                )}
                keyExtractor={item => `${item.id}`}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                numColumns={2}
            />
        </View>


    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%",
        backgroundColor: '#d1e3f8',

    },
    // Catagories
    CatagoriesList: {
        marginTop: 30,
        marginLeft: 30,
        width: "40%",
        height: 200,
        backgroundColor: '#ffffff',
        borderRadius: 15,
        alignItems: 'center',
        shadowOpacity: 1.8,
        shadowColor: "#ccd5de",
    },
    CatagoriesImage: {
        top: "10%",
        width: 90,
        height: 90,
    },
    CatagoriesName: {
        top: "17%",
        fontSize: 16,
    },
    click: {
        top: 50
    }
});