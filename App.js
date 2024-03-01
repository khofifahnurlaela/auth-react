import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import RegisterScreen from './screens/RegisterScreen';
import { Provider } from 'react-redux';
import store from './reducers/index'
import DetailScreen from './screens/DetailScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Login'>
          <Stack.Screen 
            name="Login" 
            component={LoginScreen} 
            options={{title: 'Login', headerShown: false}}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{title: 'Home Page', headerShown: false}}
          />
          <Stack.Screen
            name="Register"
            component={RegisterScreen}
            options={{title: 'Register', headerShown: false}}
          />
          <Stack.Screen
            name="Detail"
            component={DetailScreen}
            options={{title: 'Detail Page', headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}