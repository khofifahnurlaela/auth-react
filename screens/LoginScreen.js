import { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, View, Button, Alert, TouchableOpacity} from "react-native"
import { FIREBASE_AUTH } from "../helpers/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { signInUser } from "../reducers/auth";
import { useDispatch, useSelector } from "react-redux";

const LoginScreen = ({ navigation }) => {
    const auth = FIREBASE_AUTH;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const authState = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        AsyncStorage
        .getItem('token')
        .then(token => {
            if (token !== null) {
                navigation.navigate('Home')
            }
        }) 
    }, [])

    useEffect(() => {
        if (authState.token !== null) {
            Alert.alert(`Login Success`, `Welcome User`, [
                {
                    text: 'Ok',
                    onPress: () => navigation.navigate('Home')
                }
            ])
        }
    }, [authState.token])

    const handleLogin = async() => {
        const payload = {
            email: email,
            password: password,
        }

        dispatch(signInUser(payload));
        // try{
        //     const response = await signInWithEmailAndPassword(auth, email, password)
        //     // .then(res => console.log(res))
        //     // .catch(err => console.error(err));
        //     console.log("Success Login", response);
        //     Alert.alert(`Login Success`, `Welcome ${response.user.email}`, [
        //         {
        //             text: 'Ok',
        //             onPress: () => navigation.navigate('Home'),
        //         }
        //     ])
        // }catch(error) {
        //     // console.error("Login Failed", error);
        //     Alert.alert('Login Failed', error.message);
        // }

        // signInWithEmailAndPassword(auth, email, password)   // 1. sign in user
        // .then(response => response.user.getIdToken())       // 2. call user id token
        // .then(token => AsyncStorage.setItem('token', token))    // 3. Store token
        // .then( () => {
        //     Alert.alert(`Login Success`, `Welcome User`, [
        //         {
        //             text: 'Ok',
        //             onPress: () => navigation.navigate('Home')
        //         }
        //     ])
        // })
        // .catch(error => {
        //     Alert.alert(`Login Failed`, error.message)
        // })
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={{fontSize: 28, fontWeight: 'bold', margin: 16}}>LOGIN</Text>
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
            <Button title="Login" onPress={handleLogin}/>
            <Text>{authState.loading? 'Loading...' : ''}</Text>
            <View style={styles.horizontal}>
                <Text style={styles.regularText}>Belum memiliki account?</Text>
                <TouchableOpacity>
                    <Text style={styles.regularTextBold} onPress={() => navigation.navigate('Register')}>Register</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView> 
    )
} 

export default LoginScreen;

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