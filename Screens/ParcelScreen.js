import React from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput, TouchableOpacity } from 'react-native';
const windowHeight = Dimensions.get('window').height;

export default class ParcelScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <View style={styles.main}>
                <View style={styles.pictureFrame}></View>

                <TextInput placeholder="Description" placeholderTextColor="black" style={styles.textInput} />
                <TextInput placeholder="Description" placeholderTextColor="black" style={styles.textInput} />
                <TextInput placeholder="Description" placeholderTextColor="black" style={styles.textInput} />
                <TextInput placeholder="Description" placeholderTextColor="black" style={styles.textInput} />

                <View style={{justifyContent: 'space-around', alignItems: 'center', flexDirection: 'row', width: '80%',height: '15%'}}>
                    <TouchableOpacity style={{backgroundColor: "#FAAF40", width: '35%', justifyContent: 'center', alignItems: 'center', height: '40%',borderRadius: 10}}>
                        <Text style={{color: 'white'}}>Next</Text>

                    </TouchableOpacity>
                    <TouchableOpacity style={{backgroundColor: "#979797", width: '35%', justifyContent: 'center', alignItems: 'center', height: '40%',borderRadius: 10}}>
                        <Text style={{color: 'white'}}>Cancel</Text>

                    </TouchableOpacity>

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
        justifyContent: 'space-evenly',
        alignItems: 'center',

    },
    pictureFrame: {
        width: '80%',
        height: '25%',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 1

    },
    textInput: {
        width: '80%',
        height: '10%',
        borderWidth: 1,
    },
})