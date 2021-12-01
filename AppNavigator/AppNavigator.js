import * as React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerNavigator from "./DrawerNavigator";
import HomeScreen from "../Screens/HomeScreen"
import ParcelScreen from "../Screens/ParcelScreen";
import ParcelScreen2 from "../Screens/ParcelScreen2";
import DeliveredScreen from "../Screens/DeliveredScreen";
import Details from "../Screens/Details";
import OnGoingScreen from "../Screens/OnGoingScreen";
import Icon from "react-native-vector-icons/FontAwesome5"


const Stack = createNativeStackNavigator();
function HomeStack({ navigation }) {
    return (
        <NavigationContainer independent={true}>
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
                                size={30}
                                onPress={() => { navigation.openDrawer() }}
                                style={{ width: 50, height: 35, justifyContent: 'center', alignItems: 'center' }}

                            />

                        )
                    }}
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
                    options={{
                        title: 'Parcel'
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="DrawerNavigator"
                screenOptions={{
                    headerShown: false,
                    headerTitleAlign: 'center',
                }}
            >
                <Stack.Screen
                    name="Homestack"
                    component={HomeStack}
                />
                <Stack.Screen
                    name="DrawerNavigator"
                    component={DrawerNavigator}
                />


            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator;