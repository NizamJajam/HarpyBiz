import * as React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from "../Screens/HomeScreen"


const Stack = createNativeStackNavigator();




function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="HomeScreen"
                screenOptions={{
                    headerShown: true,
                    headerTitleAlign: 'center',  
                }}

            >
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}

                />                
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator;