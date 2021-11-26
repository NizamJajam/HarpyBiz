import React from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, ScrollView } from 'react-native';
const windowHeight = Dimensions.get('window').height;

export default class ParcelScreen2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemPicture: require("../assets/tShirtBig.png"),
            harpyCR: "Mohamed Amrin Bin Abdul Mansor",
            phoneNumber: "010 357 0729",
            address: "No 23, Lorong 3, Taman Sempaul, 88000 Kota Kinabalu Sabah",
            name:'Mohd Iswan Bin Mokhtar'
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
                        {/* <TextInput placeholder="Description" placeholderTextColor="grey" style={styles.textInput} />
                        <TextInput placeholder="Category" placeholderTextColor="grey" style={styles.textInput} />
                        <TextInput placeholder="Phone Number" placeholderTextColor="grey" style={styles.textInput} keyboardType="phone-pad"/> */}
                        <View style={styles.sections}>
                            <Text style={styles.title}>Category</Text>
                        </View>
                        <View style={styles.sections}>
                            <Text style={styles.title}>{this.state.name}</Text>
                        </View>
                        <View style={styles.sections}>
                            <Text style={styles.title}>Delivery Location</Text>
                            <Text style={styles.text}>Address</Text>
                        </View>
                        <View style={styles.sections}>
                            <Text style={styles.title}>Payment Method</Text>
                            <Text style={styles.text}>Cash on Delivery</Text>
                        </View>
                        <View style={styles.sections}>
                            <Text style={styles.title}>Order Info</Text>
                            <Text style={styles.text}>Subtotal</Text>
                            <Text style={styles.text}>Tax</Text>
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
        width: '100%'
    },
    main: {
        flex: 1,
        width: '100%',
        backgroundColor: "white",
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: windowHeight / 2

    },
    topView: {
        height: 300,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#F2F2F2',
        borderBottomStartRadius: 40,
        borderBottomEndRadius: 40,
        elevation: 5


    },
    bottomView: {
        height: 500,
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',

    },
    pictureFrame: {
        width: '80%',
        height: '70%',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 1,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden'

    },
    sections: {
        width: '85%',
        height: '15%',
    },
    title: {
        color: 'black',
        fontSize: 15,
        fontWeight: 'bold'
    },
    text: {
        color: 'black',
    },
})