import React from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, ScrollView } from 'react-native';
const windowHeight = Dimensions.get('window').height;

export default class ParcelScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemPicture: require("../assets/sneakers2.png")
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

            //     <View style={styles.bottomView}>
            //         <TextInput placeholder="Description" placeholderTextColor="black" style={styles.textInput} />
            //         <TextInput placeholder="Phone Number" placeholderTextColor="black" style={styles.textInput} />
            //         <TextInput placeholder="Number of Items" placeholderTextColor="black" style={styles.textInput} />
            //         <TextInput placeholder="Size" placeholderTextColor="black" style={styles.textInput} />

            //         <View style={{ justifyContent: 'space-around', alignItems: 'center', flexDirection: 'row', width: '80%', height: '15%' }}>
            //             <TouchableOpacity
            //                 style={{ backgroundColor: "#FAAF40", width: '35%', justifyContent: 'center', alignItems: 'center', height: '70%', borderRadius: 10 }}
            //                 onPress={() => { this.props.navigation.navigate("Parcel2") }}

            //             >
            //                 <Text style={{ color: 'white' }}>Next</Text>

            //             </TouchableOpacity>
            //             <TouchableOpacity
            //                 style={{ backgroundColor: "#979797", width: '35%', justifyContent: 'center', alignItems: 'center', height: '70%', borderRadius: 10 }}
            //             >
            //                 <Text style={{ color: 'white' }}>Cancel</Text>

            //             </TouchableOpacity>

            //         </View>

            //     </View>

            // </KeyboardAvoidingView>
            <View style={styles.main}>


                <ScrollView style={styles.container}>
                    <TouchableOpacity style={styles.topView} onPress={()=>{}}>
                        {/* <View style={styles.pictureFrame}>
                            <Image
                                source={this.state.itemPicture}
                                resizeMode="contain"
                            />


                        </View> */}
                        <Text style={{fontSize: 25, color: '#BBBBBB', fontFamily: 'SourceCodePro'}}>Upload Parcel</Text>

                    </TouchableOpacity>
                    <View style={styles.bottomView}>
                        <TextInput placeholder="Description" placeholderTextColor="grey" style={styles.textInput} />
                        <TextInput placeholder="Category" placeholderTextColor="grey" style={styles.textInput} />
                        <TextInput placeholder="Phone Number" placeholderTextColor="grey" style={styles.textInput} keyboardType="phone-pad"/>
                        <View style={{ justifyContent: 'space-around', alignItems: 'center', flexDirection: 'row', width: '80%', height: '15%' }}>
                            <TouchableOpacity
                                style={{ backgroundColor: "#FAAF40", width: '70%', justifyContent: 'center', alignItems: 'center', height: '70%', borderRadius: 5 }}
                                onPress={() => { this.props.navigation.navigate("Parcel2") }}

                            >
                                <Text style={{ color: 'white', fontWeight: 'bold' }}>Next</Text>

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
        paddingLeft: 20,
        borderRadius: 10,
        overflow: 'hidden',
        color: 'black',
        backgroundColor: '#F2F2F2',
        fontFamily:"SourceCodePro"
    },
})