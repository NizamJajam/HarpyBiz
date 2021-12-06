import * as React from "react"
import { View, Text, StyleSheet, Dimensions, TouchableOpacit, Button } from 'react-native';
import { NavigationContainer } from "@react-navigation/native"
import HomeScreen from "../Screens/HomeScreen"
import Details from "../Screens/Details";
import OnGoingScreen from "../Screens/OnGoingScreen";
import ParcelScreen from "../Screens/ParcelScreen";
import ParcelScreen2 from "../Screens/ParcelScreen2";
import DeliveredScreen from "../Screens/DeliveredScreen";
import ContactUs from "../Screens/ContactUs";
import TrackScreen from "../Screens/TrackScreen";
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
                        headerShown: true,
                        headerLeft: () => (
                            <Icon
                                name="bars"
                                color="black"
                                size={30}
                                onPress={() => { navigation.openDrawer() }} 
                                style={{width: 50, height: 35,justifyContent: 'center', alignItems: 'center'}}
                                
                                />

                        )
                    }}
                />
                <Stack.Screen
                    name="MainDrawerNavigator"
                    component={DrawerNavigator}
                />
                <Stack.Screen
                    name="DetailsScreen"
                    component={Details}
                />
                <Stack.Screen
                    name="ParcelScreen"
                    component={ParcelScreen}
                />
                <Stack.Screen
                    name="ParcelScreen2"
                    component={ParcelScreen2}
                />
                <Stack.Screen
                    name="OnGoingScreen"
                    component={OnGoingScreen}
                />
                <Stack.Screen
                    name="DeliveredScreen"
                    component={DeliveredScreen}
                />
                <Stack.Screen
                    name="TrackScreen"
                    component={TrackScreen}
                    options={{
                        title: 'Track Shipment'
                    }}
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
                    // headerTransparent:true,
                    // headerStyle:{
                    //     position: 'absolute',
                    //     backgroundColor: 'transparent',
                    //     zIndex: 100,
                    //     top: 0,
                    //     left: 0,
                    //     right: 0,
                    //     elevation: 0,
                    //     shadowOpacity: 0,
                    //     borderBottomWidth: 0
                    
                    // }
                }}

            >
                <Stack.Screen
                    name="Parcel"
                    component={ParcelScreen}
                />
                <Stack.Screen
                    name="Parcel2"
                    component={ParcelScreen2}
                    options={{
                        title:"Parcel"
                    }}
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
                    headerShown: true,
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
                    headerShown: true,
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
                initialRouteName="HomeStack"
                screenOptions={{
                    headerShown: false,
                    headerTitleAlign: 'center',
                }}
                drawerContent={props => <DrawerContent {...props} />}

            >
                <Drawer.Screen name="Home" component={HomeStack} />
                <Drawer.Screen name="ParcelScreen" component={ParcelScreen}/>
                <Drawer.Screen name="ParcelScreen2" component={ParcelScreen2}/>
                <Drawer.Screen name="OnGoingScreen" component={OnGoingScreen}/>
                <Drawer.Screen name="DeliveredScreen" component={DeliveredScreen}/>
                <Drawer.Screen name="ContactUs" component={ContactUs}/>
                <Drawer.Screen name="TrackScreen" component={TrackScreen}/>

            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default DrawerNavigator;