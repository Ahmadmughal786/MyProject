import {View, Text} from 'react-native';
import React from 'react';
import Login from './pages/Login';
import Home from './pages/Home';
// import SignUp from './pages/SignUp';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainContent from './pages/MainContent';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Content" component={MainContent} />
      </Stack.Navigator>
    </NavigationContainer>

    // <Login />
    // <SignUp />
  );
};

export default App;
