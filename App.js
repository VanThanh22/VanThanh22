import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import OnBoarding from './screens/Onboarding';
import Register from './screens/Register';
import Login from './screens/Login';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Register' screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="Onbparding" component={OnBoarding} />
        <Stack.Screen name="Register" component={Register} /> */}
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer >
  )
}