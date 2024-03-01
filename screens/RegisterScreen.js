import AsyncStorage from "@react-native-async-storage/async-storage";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import { SafeAreaView, Text, StyleSheet, TextInput, Button, Alert, View, TouchableOpacity } from "react-native"
import { FIREBASE_AUTH } from "../helpers/firebase";

const RegisterScreen = ({navigation}) => {
    const auth = FIREBASE_AUTH;
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async() => {
        // try{
        //     const response = await createUserWithEmailAndPassword(auth, email, password)
        //     console.log("Success Register User", response);
        //     Alert.alert(`Register Success`, `Email: ${response.user.email} Created`)
        // } catch(error) {
        //     // console.error("Register User Failed", error);
        //     Alert.alert("Register Failed", error.message);
        // }

        createUserWithEmailAndPassword(auth, email, password)
        .then(response => response.user.getIdToken())
        .then(token => AsyncStorage.setItem('token', token))
        .then( () => {
            Alert.alert(`Register Success`, `Welcome User`, [
                {
                    text: 'Ok',
                    onPress: () => navigation.navigate('Home')
                }
            ])
        })
        .catch(error => {
            console.error(error)
            Alert.alert(`Register Failed`, error.message)
        })
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={{fontSize: 28, fontWeight: 'bold', margin: 16}}>REGISTER</Text>
            {/* <Text style={styles.title}>Username</Text>
            <TextInput 
                style={styles.input}
                placeholder="Input username"
                value={name}
                onChangeText={setName}
                /> */}
            <Text style={styles.title}>Email</Text>
            <TextInput 
                style={styles.input}
                placeholder="Input email"
                value={email}
                onChangeText={setEmail}
                />
            <Text style={styles.title}>Password</Text>
            <TextInput 
                style={styles.input}
                placeholder="Input password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            <Button title="Register" onPress={handleRegister} />
            <View style={styles.horizontal}>
                <Text style={styles.regularText}>Sudah memiliki account?</Text>
                <TouchableOpacity>
                    <Text style={styles.regularTextBold} onPress={ () => navigation.navigate('Login')}>Login</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default RegisterScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    //   justifyContent: 'center',
      padding: 16,
    },
    input: {
        borderWidth: 1,
        borderRadius: 12,
        borderStyle: 'solid',
        borderColor: 'grey',
        padding: 12, 
        marginVertical: 4,
        margin: 12, 
    },
    title: {
        fontSize: 20, 
        fontWeight: 'bold',
        marginLeft: 20,
    },
    regularText: {
        fontSize: 18,
    },
    regularTextBold: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 8,
    },
    horizontal: {
        flexDirection: 'row',
        padding: 16
    },
    
  });