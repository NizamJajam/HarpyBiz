import React from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, ScrollView } from 'react-native';
const windowHeight = Dimensions.get('window').height;

export default class ParcelScreen2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemPicture: require("../Assets/sneakers2.png"),
            harpyCR: "Mohamed Amrin Bin Abdul Mansor",
            phoneNumber: "010 357 0729",
            address: "No 23, Lorong 3, Taman Sempaul, 88000 Kota Kinabalu Sabah"

        }
    }
    render() {
        return (
            // <KeyboardAvoidingView style={styles.main} behavior="height">
            //     <View style={styles.topView}>
            //         <View style={styles.pictureFrame}>
            //             <Image
            //                 source={this.state.itemPicture}
            //                 resizeMode="contain"
            //             />


            //         </View>

            //     </View>

            // <View style={styles.bottomView}>
            // <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 20 }}>Recipient Information</Text>
            // <View style={styles.harpyCR}>
            //     <View style={styles.divider}>
            //         <Text style={styles.infoText}>Harpy CR</Text>
            //         <Text style={styles.infoText}>:</Text>
            //     </View>
            //     <View style={styles.information}>
            //         <Text style={styles.infoText}>{this.state.harpyCR}</Text>
            //     </View>

            // </View>
            // <View style={styles.phoneNumber}>
            //     <View style={styles.divider}>
            //         <Text style={styles.infoText}>No. Phone</Text>
            //         <Text style={styles.infoText}>:</Text>
            //     </View>
            //     <View style={styles.information}>
            //         <Text style={styles.infoText}>{this.state.phoneNumber}</Text>
            //     </View>
            // </View>
            // <View style={styles.address}>
            //     <View style={styles.divider}>
            //         <Text style={styles.infoText}>Address</Text>
            //         <Text style={styles.infoText}>:</Text>
            //     </View>
            //     <View style={styles.information}>
            //         <Text style={styles.infoText}>{this.state.address}</Text>
            //     </View>

            //     </View>




            //      </View>
            //     <View style={{ justifyContent: 'space-around', alignItems: 'center', flexDirection: 'row', width: '80%', height: '15%', flex: 1 }}>
            //         <TouchableOpacity style={{ backgroundColor: "#FAAF40", width: '35%', justifyContent: 'center', alignItems: 'center', height: '60%', borderRadius: 10 }}>
            //             <Text style={{ color: 'white' }}>Next</Text>

            //         </TouchableOpacity>
            //         <TouchableOpacity style={{ backgroundColor: "#979797", width: '35%', justifyContent: 'center', alignItems: 'center', height: '60%', borderRadius: 10 }} onPress={()=>{this.props.navigation.pop()}}>
            //             <Text style={{ color: 'white' }}>Cancel</Text>

            //         </TouchableOpacity>

            //     </View>

            // </KeyboardAvoidingView>
            <View style={styles.main}>


                <ScrollView style={styles.container}>
                    <View style={styles.topView}>
                        <View style={styles.pictureFrame}>
                            <Image
                                source={this.state.itemPicture}
                                resizeMode="contain"
                            />


                        </View>

                    </View>
                    <View style={styles.bottomView}>
                        <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 20 }}>Recipient Information</Text>
                        <View style={styles.harpyCR}>
                            <View style={styles.divider}>
                                <Text style={styles.infoText}>Harpy CR</Text>
                                <Text style={styles.infoText}>:</Text>
                            </View>
                            <View style={styles.information}>
                                <Text style={styles.infoText}>{this.state.harpyCR}</Text>
                            </View>

                        </View>
                        <View style={styles.phoneNumber}>
                            <View style={styles.divider}>
                                <Text style={styles.infoText}>No. Phone</Text>
                                <Text style={styles.infoText}>:</Text>
                            </View>
                            <View style={styles.information}>
                                <Text style={styles.infoText}>{this.state.phoneNumber}</Text>
                            </View>
                        </View>
                        <View style={styles.address}>
                            <View style={styles.divider}>
                                <Text style={styles.infoText}>Address</Text>
                                <Text style={styles.infoText}>:</Text>
                            </View>
                            <View style={styles.information}>
                                <Text style={styles.infoText}>{this.state.address}</Text>
                            </View>

                        </View>

                        <View style={{ justifyContent: 'space-around', alignItems: 'center', flexDirection: 'row', width: '80%', height: '15%' }}>
                            <TouchableOpacity
                                style={{ backgroundColor: "#FAAF40", width: '35%', justifyContent: 'center', alignItems: 'center', height: '70%', borderRadius: 10 }}
                            >
                                <Text style={{ color: 'white' }}>Next</Text>

                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{ backgroundColor: "#979797", width: '35%', justifyContent: 'center', alignItems: 'center', height: '70%', borderRadius: 10 }}
                                onPress={() => { this.props.navigation.goBack() }}
                            >
                                <Text style={{ color: 'white' }}>Cancel</Text>

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

    },
    bottomView: {
        height: 350,
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
    textInput: {
        width: '80%',
        height: '15%',
        borderWidth: 0.5,
        borderColor: 'grey',
        paddingLeft: 20,
        borderRadius: 20,
        elevation: 1,
        overflow: 'hidden'
    },
    harpyCR: {

        flexDirection: 'row',
        width: '90%'
    },
    phoneNumber: {

        flexDirection: 'row',
        width: '90%'
    },
    address: {

        flexDirection: 'row',
        width: '90%'
    },
    divider: {
        flexDirection: 'row',
        flex: 2,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    information: {
        flex: 3,
        marginLeft: 10
    },
    infoText: {
        color: 'black',
        fontSize: 15

    },
})