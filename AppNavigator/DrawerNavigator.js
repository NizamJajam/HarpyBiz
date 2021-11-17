import * as React from "react"
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { NavigationContainer } from "@react-navigation/native"
import HomeScreen from "../Screens/HomeScreen"
import Details from "../Screens/Details";
import OnGoingScreen from "../Screens/OnGoingScreen";
import ParcelScreen from "../Screens/ParcelScreen";
import DeliveredScreen from "../Screens/DeliveredScreen";
import { createDrawerNavigator, DrawerItem, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { DrawerContent } from "./DrawerContent";
import Icon from "react-native-vector-icons/MaterialCommunityIcons"


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
                    name="DetailsScreen"
                    component={Details}
                />
                <Stack.Screen
                    name="Parcel"
                    component={ParcelStack}
                />
                <Stack.Screen
                    name="OnGoing"
                    component={OnGoingStack}
                />
                <Stack.Screen
                    name="Delivered"
                    component={DeliveredStack}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

function ParcelStack(){
    return(
        <NavigationContainer independent="true">
            <Stack.Navigator
                initialRouteName="Parcel"
                screenOptions={{
                    headerShown: false,
                    headerTitleAlign: 'center',
                }}

            >
                <Stack.Screen
                    name="Parcel"
                    component={ParcelScreen}
                />

            </Stack.Navigator>
        </NavigationContainer>
    )
}
function OnGoingStack(){
    return(
        <NavigationContainer independent="true">
            <Stack.Navigator
                initialRouteName="OnGoing"
                screenOptions={{
                    headerShown: false,
                    headerTitleAlign: 'center',
                }}

            >
                <Stack.Screen
                    name="OnGoing"
                    component={OnGoingScreen}
                />

            </Stack.Navigator>
        </NavigationContainer>
    )
}
function DeliveredStack(){
    return(
        <NavigationContainer independent="true">
            <Stack.Navigator
                initialRouteName="Delivered"
                screenOptions={{
                    headerShown: false,
                    headerTitleAlign: 'center',
                }}

            >
                <Stack.Screen
                    name="Delivered"
                    component={DeliveredScreen}
                />

            </Stack.Navigator>
        </NavigationContainer>
    )
}




function DrawerNavigator() {
    return (
        <NavigationContainer >
            <Drawer.Navigator
                initialRouteName="Home"
                screenOptions={{
                    headerShown: true,
                    headerTitleAlign: 'center',
                }}
                drawerContent={props => <DrawerContent {...props} />}
                
                



            >
                {/* <Drawer.Screen name="UserPanel" component={UserPanel} /> */}
                <Drawer.Screen name="Home" component={HomeStack}/>
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default DrawerNavigator;