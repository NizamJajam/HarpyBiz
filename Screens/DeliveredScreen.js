import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
const windowHeight = Dimensions.get('window').height;

export default class DeliveredScreen extends React.Component{
    constructor(props){
        super(props);
        this.state ={

        }
    }
    render(){
        return(
            <View style={styles.main}>
                <Text style={{color: 'black'}}>Delivered here</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    main:{
        flex: 1, 
        width: '100%',
        backgroundColor: "white",
        justifyContent: 'center',
        alignItems: 'center'
    },
})