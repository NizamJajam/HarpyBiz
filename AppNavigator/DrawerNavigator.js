import * as React from "react"
import { NavigationContainer } from "@react-navigation/native"
import HomeScreen from "../Screens/HomeScreen"
import Details from "../Screens/Details";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from "@react-navigation/native-stack"


const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();




function HomeStack() {
    return (
        <NavigationContainer independent="true">
            <Stack.Navigator
                initialRouteName="HomeScreen"
                screenOptions={{
                    headerShown: false,
                    headerTitleAlign: 'center',
                }}

            >
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                />
                <Stack.Screen
                    name="Details"
                    component={Details}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

function DrawerNavigator() {
    return (
        <NavigationContainer >
            <Drawer.Navigator
                initialRouteName="HomeScreen"
                screenOptions={{
                    headerShown: true,
                    headerTitleAlign: 'center',
                }}


            >
                <Drawer.Screen name="Home" component={HomeStack} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default DrawerNavigator;