import React from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, ScrollView } from 'react-native';
const windowHeight = Dimensions.get('window').height;
import Icon from 'react-native-vector-icons/FontAwesome'

export default class ParcelScreen2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemPicture: require("../assets/tShirtBig.png"),
            harpyCR: "Mohamed Amrin Bin Abdul Mansor",
            phoneNumber: "010 357 0729",
            address: "No 23, Lorong 3, Taman Sempaul, 88000 Kota Kinabalu Sabah",
            name: 'Mohd Iswan Bin Mokhtar',
            quantity: 1,
            paymentMethod: 'Maybank',
            deliveryLocation: 'No 7, Lorong 7, Jalan Tujuh, 7777, Kota Kinabalu Sabah',
            subtotal: 'RM 16.00',
            tax: 'RM 0.00',
            accountNumber: "***0729"
        }
    }
    addNumber() {
        const number = this.state.quantity;
        this.setState({
            quantity: number + 1
        })
    }
    minusNumber() {
        const number = this.state.quantity;
        if (number == 1) {

        }
        else {
            this.setState({
                quantity: number - 1
            })
        }

    }
    render() {
        return (
            <View style={styles.main}>


                <ScrollView style={styles.container}>
                    <TouchableOpacity style={styles.topView} onPress={() => { }}>

                        <Image
                            source={this.state.itemPicture}
                        />

                    </TouchableOpacity>
                    <View style={styles.bottomView}>

                        <View style={styles.sections}>
                            <Text style={styles.text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry</Text>
                            <Text style={styles.title}>Category</Text>
                        </View>
                        <View style={styles.sections}>
                            <Text style={styles.title}>{this.state.name}</Text>
                            <Text style={styles.text}>+011-3646 3237</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <TouchableOpacity style={styles.smallButton}><Text style={styles.text}>-</Text></TouchableOpacity>
                                    <Text style={{ fontSize: 20, color: "black" }}>  M  </Text>
                                    <TouchableOpacity style={styles.smallButton}><Text style={styles.text}>+</Text></TouchableOpacity>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <TouchableOpacity style={styles.smallButton} onPress={() => { this.minusNumber() }}><Text style={styles.text}>-</Text></TouchableOpacity>
                                    <Text style={{ fontSize: 20, color: "black" }}>  {this.state.quantity}  </Text>
                                    <TouchableOpacity style={styles.smallButton} onPress={() => { this.addNumber() }}><Text style={styles.text}>+</Text></TouchableOpacity>
                                </View>
                                <View>

                                </View>
                            </View>
                        </View>
                        <View style={styles.sections}>
                            <Text style={styles.title}>Delivery Location</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', }}>
                                <View style={styles.iconContainer}>
                                    <Icon name="compass" color='#FAAF40' size={20} />
                                </View>
                                <Text style={styles.smallText}>
                                    {this.state.deliveryLocation}
                                </Text>
                            </View>
                        </View>
                        <View style={styles.sections}>
                            <Text style={styles.title}>Payment Method</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                <View style={styles.iconContainer}>
                                    <Icon name="cc-visa" color='#FAAF40' size={20} />
                                </View>
                                <Text style={styles.smallText}>
                                    {this.state.paymentMethod} {"\n"}
                                    {this.state.accountNumber}
                                </Text>
                            </View>
                        </View>
                        <View style={styles.sections}>
                            <Text style={styles.title}>Order Info</Text>
                            <View style={styles.subtotalContainer}>
                                <View style={styles.subtotal}>
                                    <Text style={styles.greyText}>Subtotal</Text>
                                    <Text style={styles.greyText}>Tax</Text>
                                </View>
                                <View style={styles.subtotal2}>
                                    <Text style={styles.greyText}>{this.state.subtotal}</Text>
                                    <Text style={styles.greyText}>{this.state.tax}</Text>
                                </View>
                            </View>
                        </View>


                        <View style={{ justifyContent: 'space-around', alignItems: 'center', flexDirection: 'row', width: '80%', height: '15%' }}>
                            <TouchableOpacity
                                style={{ backgroundColor: "#FAAF40", width: '70%', justifyContent: 'center', alignItems: 'center', height: 50, borderRadius: 5 }}
                                onPress={() => { }}

                            >
                                <Text style={{ color: 'white', fontWeight: 'bold' }}>Check Out</Text>

                            </TouchableOpacity>
                        </View>

                    </View>

                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
    main: {
        flex: 1,
        width: '100%',
        backgroundColor: "white",
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: windowHeight / 2,
    },
    topView: {
        height: 300,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#F2F2F2',
        borderBottomStartRadius: 40,
        borderBottomEndRadius: 40,
        elevation: 5,
    },
    bottomView: {
        paddingTop: 20,
        height: 620,
        paddingHorizontal: 10,
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
    },
    smallButton: {
        backgroundColor: '#F2F2F2',
        width: 30,
        height: 30,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    pictureFrame: {
        width: '80%',
        height: '70%',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 1,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
    sections: {
        width: '85%',
        height: '20%',

    },
    title: {
        color: 'black',
        fontSize: 19,
        fontWeight: 'bold',
        paddingBottom: 10
    },
    text: {
        color: 'black',
        fontWeight: 'bold',
        paddingBottom: 10,
    },
    greyText: {
        color: 'grey'
    },
    smallText: {
        color: 'black',
        left: 10,

    },
    iconContainer: {
        backgroundColor: '#F2F2F2',
        width: 40,
        height: 40,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',

    },
    subtotalContainer: {
        width: '100%',
        height: '50%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    subtotal: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'flex-start'
    },
    subtotal2: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'flex-end'
    },
})