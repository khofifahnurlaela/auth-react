import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { Button, FlatList, Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../reducers/counter";

const HomeScreen = ({navigation}) => {
    const [animes, setAnimes] = useState([]);

    useEffect(() => {
        AsyncStorage
        .getItem('token') //1. check token existed
        .then(token => {
            if(token !== null){ //2. if token exist
                return fetch('https://api.jikan.moe/v4/top/anime')
            }
            return Promise.reject('Not Authorize') //3. if token doesnt exist
        })
        .then(response => response.json())
        .then(({data}) => setAnimes(data))
    }, [])

    const count = useSelector((state) => state.counter.count);
    const globalStyle = useSelector((state) => state.style.globalStyle);
    const dispatch = useDispatch();
    
    const handleLogout = () => {
        AsyncStorage
        .removeItem('token')
        .then(() => navigation.navigate('Login'))
    }

    const renderItem = ({ item }) => (
        <View style={styles.space}>
          <Image style={styles.img} source={{uri: item.images.jpg.image_url, height:64, width: 64}}></Image>
          <Text style={styles.title}>{item.title}</Text>
        </View>
      );

    return (
        <SafeAreaView style={globalStyle.container}>
            {/* <Text >Welcome Home Page</Text>
            {animes?.map(({ title, mal_id}) => <Text key={mal_id}>{title}</Text>)}
            <FlatList
                data={animes}
                renderItem={renderItem}
            /> */}
            <Text style={styles.title}>Counter: {count}</Text>
            <View style={styles.space}>
                <Button title="Increment" onPress={() => dispatch(counterActions.increment())}/>
                <Button title="Decrement" onPress={() => dispatch(counterActions.decrement())}/>
            </View>
            <Button title="Go to Details" onPress={() => navigation.navigate('Detail')}/>
            <Button 
                title="Logout"
                onPress={handleLogout}
            />
        </SafeAreaView>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
      padding: 16,
      alignItems: 'center',
    },
    space: {
        flexDirection: 'row',
        padding: 8,
        alignItems: 'center'
    },
    title: {
        marginLeft: 8,
        color: '#852884',
        fontSize: 18,
        fontWeight: 'bold',
        // flex:1,
    },
  });