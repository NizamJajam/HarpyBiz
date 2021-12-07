import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, FlatList } from 'react-native';
const windowHeight = Dimensions.get('window').height;
import Icon from "react-native-vector-icons/Ionicons"
import StepIndicator from "react-native-step-indicator"

export default class TrackScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemImage: require("../assets/tShirt.png"),
            name: 'Mohamed  Amrin Bin Abdul Mansor',
            phoneNumber: '010 357 0729',
            address: "No 23, Lorong 3, Taman Sempaul, 91308 Semporna, Sabah",
            currentPosition: 0,
            estimatedTime: '14:50 P.M',
            estimatedHours: '2 - 3 Hours',
            buttonColor: "#FAAF40",
            RiderDetails: [
                {
                    status: 'Parcel picked up',
                    location: 'Kota Kinabalu',
                    username: "Rider Name",
                    date: "15 November",
                    time: '9:30a.m',
                    route: "ST 7 R",
                    details: "To Airport",
                    isDone: true,
                },
                {
                    status: 'Parcel dropped off',
                    location: 'Kota Kinabalu',
                    username: "Rider Name",
                    date: "15 November",
                    time: '9:30a.m',
                    route: "ST 7 R",
                    details: "To Airport",
                    isDone: true,
                },
                {
                    status: 'Parcel picked up',
                    location: 'Kota Kinabalu',
                    username: "Rider Name",
                    date: "15 November",
                    time: '9:30a.m',
                    route: "ST 7 R",
                    details: "To Airport",
                    isDone: true,
                },
                {
                    status: 'Parcel dropped off',
                    location: 'Kota Kinabalu',
                    username: "Rider Name",
                    date: "15 November",
                    time: '9:30a.m',
                    route: "ST 7 R",
                    details: "To Airport",
                    isDone: true,
                },
                {
                    status: 'Parcel picked up',
                    location: 'Kota Kinabalu',
                    username: "Rider Name",
                    date: "15 November",
                    time: '9:30a.m',
                    route: "ST 7 R",
                    details: "To Airport",
                    isDone: false,
                },



            ]
        }
    }

    //just turns the button grey for now lmao
    requestCancelOrder(){
        this.setState({
            buttonColor: "#A9A9A9"
        })
    }

    //this checks if the route is finished based on the provided json file
    checkDone(isDone, username, route, details) {
        if (!isDone) {
            return (
                <View style={{ flex: 1, padding: 10, backgroundColor: '#FAAF40', borderRadius: 10, flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}>
                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 10 }}>{username}</Text>
                        <Text style={{ color: 'white', fontSize: 10 }}>{route}</Text>
                    </View>
                    <View style={{ flex: 4, justifyContent: 'center', alignItems: 'center' }}>

                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 10 }}>{details}</Text>
                        <View style={{ width: '85%', borderBottomColor: 'white', borderBottomWidth: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ backgroundColor: 'white', width: 10, height: 10, borderRadius: 5, position: 'absolute', bottom: -5 }}>

                            </View>
                            <View style={{ backgroundColor: 'white', width: 10, height: 10, borderRadius: 5, position: 'absolute', bottom: -5, right: 0 }}>

                            </View>
                        </View>
                    </View>
                </View>
            )
        }
        else {
            return (
                <View style={{ flex: 1, padding: 10, backgroundColor: '#A9A9A9', borderRadius: 10, flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}>
                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 10 }}>{username}</Text>
                        <Text style={{ color: 'white', fontSize: 10 }}>{route}</Text>
                    </View>
                    <View style={{ flex: 4, justifyContent: 'center', alignItems: 'center' }}>

                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 10 }}>{details}</Text>
                        <View style={{ width: '85%', borderBottomColor: 'white', borderBottomWidth: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ backgroundColor: 'white', width: 10, height: 10, borderRadius: 5, position: 'absolute', bottom: -5 }}>

                            </View>
                            <View style={{ backgroundColor: 'white', width: 10, height: 10, borderRadius: 5, position: 'absolute', bottom: -5, right: 0 }}>

                            </View>
                        </View>
                    </View>
                </View>
            )
        }

    }
    render() {

        return (
            <View style={styles.main}>
                <View style={styles.orderDetailsContainer}>
                    <View style={{ flex: 5, flexDirection: 'row' }}>
                        <View style={styles.imageContainer}>
                            <View style={{ width: '70%', height: '90%', justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#FAAF40', borderRadius: 10 }}>
                                <Image
                                    source={this.state.itemImage}
                                    resizeMode="contain"
                                    style={{ width: '80%', height: '80%', justifyContent: 'center', alignItems: 'center' }}
                                />

                            </View>
                        </View>
                        <View style={styles.detailsContainer}>
                            <Text style={styles.detailsText}>{this.state.name}</Text>
                            <Text style={styles.detailsText}>{this.state.phoneNumber}</Text>
                            <Text style={styles.detailsText}>{this.state.address}</Text>
                        </View>
                    </View>

                    <View style={{ flex: 2.5, flexDirection: 'row', justifyContent: 'space-around', width: '95%', alignItems: 'center' }}>
                        <TouchableOpacity style={{ backgroundColor: this.state.buttonColor, width: '30%', height: '60%', justifyContent: 'center', alignItems: 'center', borderRadius: 5 }} onPress={()=>{this.requestCancelOrder()}}>
                            <Text style={{ color: 'white', fontSize: 10, textAlign: 'center', fontFamily: 'SourceCodePro-SemiBold' }}>Request Order Cancellation</Text>
                        </TouchableOpacity>
                        <View style={{ backgroundColor: '#FAAF40', width: '65%', height: '60%', justifyContent: 'space-evenly', alignItems: 'center', borderRadius: 5, flexDirection: 'row' }}>
                            <Icon
                                name="time-outline"
                                color="white"
                                size={20}
                            />
                            <Text style={{ color: 'white', fontSize: 10, textAlign: 'center', fontFamily: 'SourceCodePro-SemiBold' }}>Arriving in 5-7 Hours</Text>
                            <TouchableOpacity style={{ backgroundColor: 'white', padding: 5, borderRadius: 20, }}>
                                <Text style={{ color: '#FAAF40', fontSize: 10, textAlign: 'center', fontFamily: 'SourceCodePro-SemiBold' }}>Live</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ flex: 1, width: '90%' }}>
                        <Text style={{ color: 'black', fontSize: 15, fontFamily: 'SourceCodePro-SemiBold' }}>Tracking History</Text>
                    </View>
                </View>
                <View style={styles.arrivalDetailsContainer}>
                    <View style={{ flex: 2, width: '90%' }}>
                        <FlatList style={{ flex: 1 }}
                            data={this.state.RiderDetails}
                            ItemSeparatorComponent={this.FlatListItemSeparator}
                            renderItem={({ item }) =>
                                <View style={styles.listItems}>
                                    <View style={{ flex: 1, padding: 10, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
                                        <View>
                                            <Text style={{ color: 'black', fontFamily: 'SourceCodePro-SemiBold', fontSize: 10 }}>{item.status}</Text>
                                            <Text style={{ color: 'grey', fontFamily: 'SourceCodePro-SemiBold', fontSize: 10 }}>{item.location}</Text>
                                        </View>
                                        <View>
                                            {/* nothing on the top one, date on the bottom one   */}
                                            <Text style={{ color: 'black', fontWeight: 'bold' }}></Text>
                                            <Text style={{ color: 'grey', fontFamily: 'SourceCodePro', fontSize: 10 }}>{item.date} {item.time}</Text>
                                        </View>

                                    </View>
                                    {this.checkDone(item.isDone, item.username, item.route, item.details)}




                                </View>
                            }
                        />
                    </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    main: {
        flex: 1,
        width: '100%',
        backgroundColor: "white",
        justifyContent: 'center',
        alignItems: 'center',
    },
    orderDetailsContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1.5,
        width: '100%',
    },
    imageContainer: {
        flex: 3,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    detailsContainer: {
        flex: 4,
        height: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
    },
    detailsText: {
        color: 'black',
        textAlign: 'left',
        fontSize: 12,
        fontFamily: 'SourceCodePro-SemiBold'
    },
    progressDetailsContainer: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        flex: 1,
        width: '100%',
        paddingLeft: 50

    },
    arrivalDetailsContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 2.5,
        width: '100%',
        paddingBottom: 10,

    },
    listItems: {
        flex: 1,
        justifyContent: 'center',
        marginTop: 5,
    },
})