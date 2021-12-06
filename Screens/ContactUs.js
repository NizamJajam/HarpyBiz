import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, ScrollView, FlatList, TextInput } from 'react-native';
const windowHeight = Dimensions.get('window').height;

export default class ContactUs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            businessOwner: "Sani Bundle",
            companyName: "Sani Bundle",
            logo: "https://drive.google.com/file/d/1p68L4lbQNlPaiwAiem7C1SMQn5SAiMXp/view",
            wallPaper: require("../assets/coverPhoto.png"),
            Deliveries: [
                {
                    image: require("../assets/tShirt.png"),
                    username: "Karl Musakkal",
                    date: "Saturday, 10 September 2021",
                    route: "Kota Kinabalu - Tawau",
                    details: "",
                },
                {
                    image: require("../assets/sneakers.png"),
                    username: "Mohamed Amrin",
                    date: "Saturday, 10 September 2021",
                    route: "Kota Kinabalu - Tawau",
                    details: "",
                },
                {
                    image: require("../assets/tShirt.png"),
                    username: "Jack",
                    date: "Saturday, 10 September 2021",
                    route: "Kota Kinabalu - Tawau",
                    details: "",
                },
                {
                    image: require("../assets/sneakers.png"),
                    username: "Borhanuddin",
                    date: "Saturday, 10 September 2021",
                    route: "Kota Kinabalu - Tawau",
                    details: "",
                }, {
                    image: require("../assets/makeup.png"),
                    username: "Wan",
                    date: "Saturday, 10 September 2021",
                    route: "Kota Kinabalu - Tawau",
                    details: "",
                },
            ]
        }
    }
    render() {
        return (
            // <View style={styles.main} contentContainerStyle={{ flexGrow: 1 }}>
            //     <View style={styles.wallpaperView}>
            //         <Image
            //             source={this.state.wallPaper}
            //             resizeMode="contain"
            //         />
            //     </View>
            //     <ScrollView style={styles.contentView} contentContainerStyle={{
            //         justifyContent: 'space-evenly',
            //         alignItems: 'center',
            //         flexGrow: 1
            //     }}>
            // <View style={{ width: '90%', backgroundColor: '#ECECEC', height: '90%', justifyContent: 'center', alignItems: 'center' }}>
            //     <TextInput placeholder="Description" placeholderTextColor="grey" style={styles.textInput} />
            //     <TextInput placeholder="Description" placeholderTextColor="grey" style={styles.textInput} />
            //     <TextInput placeholder="Description" placeholderTextColor="grey" style={styles.textInput} />
            //     <TextInput placeholder="Description" placeholderTextColor="grey" style={styles.textInput} />
            //     <TextInput placeholder="Description" placeholderTextColor="grey" style={styles.textInput} />
            // </View>

            //     </ScrollView>
            // </View>
            <View style={styles.main}>
                <ScrollView
                    style={{
                        flex: 1,
                        width: '100%'
                    }}
                    contentContainerStyle={{
                        alignItems: 'center'
                    }}


                >
                    <View style={styles.wallpaperView}>
                        <Image
                            source={this.state.wallPaper}
                            resizeMode="contain"
                        />
                    </View>
                    <View style={{ width: '100%', height: 650, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ width: '90%', backgroundColor: '#ECECEC', height: '95%', justifyContent: 'space-around', alignItems: 'center' }}>
                            <TextInput placeholder="To" placeholderTextColor="grey" style={styles.textInput} />
                            <TextInput placeholder="Name*" placeholderTextColor="grey" style={styles.textInput} />
                            <TextInput placeholder="Contact No" placeholderTextColor="grey" style={styles.textInput} />
                            <TextInput placeholder="Email" placeholderTextColor="grey" style={styles.textInput} />
                            <TextInput placeholder="Subject" placeholderTextColor="grey" style={styles.textInput} />
                            <TextInput placeholder="Message" placeholderTextColor="grey" style={styles.messageInput} multiline={true} />
                            <TouchableOpacity
                                style={{ backgroundColor: "#FAAF40", width: '40%', justifyContent: 'center', alignItems: 'center', height: 45, borderRadius: 5 }}
                                onPress={() => {this.props.navigation.navigate("Home")}}

                            >
                                <Text style={{ color: 'white', fontWeight: 'bold' }}>Send Message</Text>

                            </TouchableOpacity>



                        </View>

                    </View>



                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    allText: {
        color: "black"
    },
    main: {
        flex: 1,
        width: '100%',
        backgroundColor: "white",
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: windowHeight / 2
    },
    wallpaperView: {
        width: '100%',
        borderWidth: 0.5,
        backgroundColor: "#979797",
        overflow: 'hidden'
    },
    contentView: {
        width: '100%',
    },
    userDetails: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        justifyContent: "flex-start",
        alignItems: 'center',
        paddingLeft: 20,
    },
    imageContainer: {
        width: 65,
        height: 65,
        borderWidth: 0.5,
        borderRadius: 100,
        overflow: 'hidden'
    },
    businessOwner: {
        fontSize: 19,
        color: 'black',
        // fontWeight: 'bold',
        fontFamily: 'SourceCodePro-SemiBold',
    },
    companyName: {
        color: 'grey',
        fontSize: 11,
        fontFamily: 'SourceCodePro',
    },
    buttonContainer: {
        flex: 1,
        width: '100%',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
    },
    buttons: {
        backgroundColor: "#FAAF40",
        width: 70,
        height: 70,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        elevation: 5,
    },
    buttonText: {
        fontSize: 10,
        color: 'white',
        fontFamily: 'SourceCodePro',
    },
    recentDeliveries: {
        flex: 4,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10
    },
    flatListContainer: {
        flex: 1,
        width: '95%'
    },
    listItems: {
        paddingHorizontal: 5,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomColor: 'white',
        borderBottomWidth: 1,
    },
    textInput: {
        width: '80%',
        height: 50,
        paddingLeft: 20,
        overflow: 'hidden',
        color: 'black',
        backgroundColor: 'white',
        fontFamily: "SourceCodePro"
    },
    messageInput: {
        width: '80%',
        height: 200,
        paddingLeft: 20,
        overflow: 'hidden',
        color: 'black',
        backgroundColor: 'white',
        fontFamily: "SourceCodePro",
        textAlign: 'left'
    },

});