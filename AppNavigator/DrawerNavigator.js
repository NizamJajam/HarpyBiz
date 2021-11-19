import * as React from "react"
import { View, Text, StyleSheet, Dimensions, TouchableOpacit, Button } from 'react-native';
import { NavigationContainer } from "@react-navigation/native"
import HomeScreen from "../Screens/HomeScreen"
import Details from "../Screens/Details";
import OnGoingScreen from "../Screens/OnGoingScreen";
import ParcelScreen from "../Screens/ParcelScreen";
import ParcelScreen2 from "../Screens/ParcelScreen2";
import DeliveredScreen from "../Screens/DeliveredScreen";
import { createDrawerNavigator, DrawerItem, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { DrawerContent } from "./DrawerContent";
import Icon from "react-native-vector-icons/FontAwesome5"


const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
function HomeStack({ navigation }) {
    return (
        <NavigationContainer independent="true">
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{
                    headerShown: true,
                    headerTitleAlign: 'center',
                }}

            >
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        headerLeft: () => (
                            <Icon
                                name="bars"
                                color="black"
                                size={25}
                                onPress={() => { navigation.openDrawer() }} />

                        )
                    }}
                />
                <Stack.Screen
                    name="MainDrawerNavigator"
                    component={DrawerNavigator}
                    // options={{
                    //     headerLeft: () => (
                    //         <Icon
                    //             name="bars"
                    //             color="black"
                    //             size={25}
                    //             onPress={() => { navigation.openDrawer() }} />

                    //     )
                    // }}
                />
                <Stack.Screen
                    name="DetailsScreen"
                    component={Details}
                />
                <Stack.Screen
                    name="Parcel"
                    component={ParcelScreen}
                />
                <Stack.Screen
                    name="OnGoing"
                    component={OnGoingScreen}
                />
                <Stack.Screen
                    name="Delivered"
                    component={DeliveredScreen}
                />
                <Stack.Screen
                    name="Parcel2"
                    component={ParcelScreen2}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

function ParcelStack() {
    return (
        <NavigationContainer independent="true">
            <Stack.Navigator
                initialRouteName="Parcel"
                screenOptions={{
                    headerShown: true,
                    headerTitleAlign: 'center',
                }}

            >
                <Stack.Screen
                    name="Parcel"
                    component={ParcelScreen}
                />
                <Stack.Screen
                    name="Parcel2"
                    component={ParcelScreen2}
                />

            </Stack.Navigator>
        </NavigationContainer>
    )
}
function OnGoingStack() {
    return (
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
                <Stack.Screen
                    name="DetailsScreen"
                    component={Details}
                />

            </Stack.Navigator>
        </NavigationContainer>
    )
}
function DeliveredStack() {
    return (
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
        <NavigationContainer independent="true">
            <Drawer.Navigator
                initialRouteName="Home"
                screenOptions={{
                    headerShown: false,
                    headerTitleAlign: 'center',
                }}
                drawerContent={props => <DrawerContent {...props} />}

            >
                <Drawer.Screen name="HomeStack" component={HomeStack} />
                <Drawer.Screen name="ParcelStack" component={ParcelStack}/>
                <Drawer.Screen name="OnGoingStack" component={OnGoingStack}/>
                <Drawer.Screen name="DeliveredStack" component={DeliveredStack}/>

            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default DrawerNavigator;