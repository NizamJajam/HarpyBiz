import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, FlatList } from 'react-native';
const windowHeight = Dimensions.get('window').height;
import Icon from "react-native-vector-icons/Ionicons"
import StepIndicator from "react-native-step-indicator"

export default class newFile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemImage: require("../Assets/tShirt.png"),
            name: 'Mohamed  Amrin Bin Abdul Mansor',
            phoneNumber: '010 357 0729',
            address: "No 23, Lorong 3, Taman Sempaul, 91308 Semporna, Sabah",
            currentPosition: 0,
            estimatedTime: '14:50 P.M',
            estimatedHours: '2 - 3 Hours',
            RiderDetails: [
                {
                    image: require("../Assets/tShirt.png"),
                    username: "Rider Name",
                    date: "Saturday, 10 September 2021",
                    route: "ST 7 R",
                    details: "",
                },
                {
                    image: require("../Assets/tShirt.png"),
                    username: "Cloud Runner",
                    date: "Saturday, 10 September 2021",
                    route: "Kota Kinabalu - Tawau",
                    details: "",
                },
                {
                    image: require("../Assets/tShirt.png"),
                    username: "Rider Name",
                    date: "Saturday, 10 September 2021",
                    route: "ST 7 R",
                    details: "",
                },

            ]
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
                    <View style={{ flex: 3, flexDirection: 'row', justifyContent: 'center', width: '100%', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <TouchableOpacity style={{ backgroundColor: '#FAAF40', width: '30%', height: '60%', justifyContent: 'center', alignItems: 'center', marginLeft: 25, borderRadius: 5 }}>
                            <Text style={{ color: 'white', fontSize: 10, textAlign: 'center' }}>Request Cancel Order</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.progressDetailsContainer}>
                    <StepIndicator
                        customStyles={customStyles}
                        currentPosition={this.state.currentPosition}
                        labels={labels}
                        stepCount={4}
                        direction={'vertical'}
                    />
                </View>
                <View style={styles.arrivalDetailsContainer}>
                    <View style={{ flex: 1, width: '100%', borderRadius: 40, borderWidth: 1, flexDirection: 'row' }}>
                        <View style={{flex: 1, height: '100%', justifyContent: 'center', alignItems: 'flex-end'}}>
                            <Icon name="time-outline" size={40} color="black"/>
                        </View>
                        <View style={{flex: 3, height: '100%', justifyContent: 'center', alignItems: 'flex-start', paddingLeft: 20}}>
                            <Text style={{color: 'black', fontSize: 19, textAlign:'left'}}>Arriving in {this.state.estimatedHours}</Text>
                            <Text style={{color: 'grey', fontSize: 11, textAlign:'left'}}>Estimated Time - {this.state.estimatedTime}</Text>
                        </View>
                        <View style={{flex: 1.5, height: '100%', justifyContent: 'center', alignItems: 'center', paddingRight: 10,}}>
                            <TouchableOpacity style={{backgroundColor: '#FAAF40', justifyContent: 'center', alignItems: 'center', width:'90%', height: '30%', borderRadius: 5}}>
                                <Text style={{fontWeight: 'bold', color: 'white'}}>Live</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ flex: 2, width: '90%' }}>
                        <FlatList style={{ flex: 1 }}
                            data={this.state.RiderDetails}
                            ItemSeparatorComponent={this.FlatListItemSeparator}
                            renderItem={({ item }) =>
                                <View style={styles.listItems}>
                                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                        <View style={{ backgroundColor: '#C4C4C4', width: "70%", height: '90%', justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: "#C4C4C4", borderRadius: 60 }}>
                                            <Image

                                                resizeMode="contain"
                                            />
                                        </View>

                                    </View>
                                    <View style={{ flex: 3, padding: 10 }}>
                                        <Text style={{ color: 'black', fontWeight: 'bold' }}>{item.username}</Text>
                                        <Text style={{ color: 'grey' }}>{item.route}</Text>
                                    </View>
                                    

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
        flex: 1,
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
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'left',
        fontSize: 12
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
        flex: 1.5,
        width: '100%',

    },
    listItems: {
        padding: 5,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomColor: 'white',
        borderBottomWidth: 1,
    },
})


//no idea how to separate step indicator with the labels. Temporary for now
const labels = ["                        Rider", "                      Cloud Runner", "                        Rider", "                       Recipient"];
const customStyles = {
    stepIndicatorSize: 25,
    currentStepIndicatorSize: 30,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: '#00FF19',
    stepStrokeWidth: 3,
    stepStrokeFinishedColor: '#00FF19',
    stepStrokeUnFinishedColor: '#aaaaaa',
    separatorFinishedColor: '#00FF19',
    separatorUnFinishedColor: '#aaaaaa',
    stepIndicatorFinishedColor: '#00FF19',
    stepIndicatorUnFinishedColor: '#ffffff',
    stepIndicatorCurrentColor: '#ffffff',
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: '#00FF19',
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: '#aaaaaa',
    labelColor: '#999999',
    labelSize: 13,
    currentStepLabelColor: '#fe7013',
    labelAlign: 'center',


}