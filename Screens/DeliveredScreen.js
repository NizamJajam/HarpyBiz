import React from 'react';
import { View, Text, StyleSheet, Dimensions, FlatList, Image, TouchableOpacity } from 'react-native';
const windowHeight = Dimensions.get('window').height;

export default class DeliveredScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            delivered: [
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
                },
                {
                    image: require("../assets/makeup.png"),
                    username: "Yusliena",
                    date: "Saturday, 10 September 2021",
                    route: "Kota Kinabalu - Tawau",
                    details: "",
                },
                {
                    image: require("../assets/makeup.png"),
                    username: "Nawie",
                    date: "Saturday, 10 September 2021",
                    route: "Kota Kinabalu - Tawau",
                    details: "",
                },
                {
                    image: require("../assets/makeup.png"),
                    username: "Sani Badawi",
                    date: "Saturday, 10 September 2021",
                    route: "Kota Kinabalu - Tawau",
                    details: "",
                },
                {
                    image: require("../assets/makeup.png"),
                    username: "Razwan",
                    date: "Saturday, 10 September 2021",
                    route: "Kota Kinabalu - Tawau",
                    details: "",
                },
                {
                    image: require("../assets/makeup.png"),
                    username: "Ruslan",
                    date: "Saturday, 10 September 2021",
                    route: "Kota Kinabalu - Tawau",
                    details: "",
                },
            ]
        }
    }
    render() {
        return (
            <View style={styles.main}>
                <View style={styles.flatListContainer}>
                    <FlatList style={{ flex: 1 }}
                        data={this.state.delivered}
                        ItemSeparatorComponent={this.FlatListItemSeparator}
                        renderItem={({ item }) =>
                            <View style={styles.listItems}>
                                <View style={{ flex: 3, padding: 5 }}>
                                    <Text style={{ color: 'black', fontFamily: 'SourceCodePro-SemiBold', }}>{item.username}</Text>
                                    <Text style={{ color: 'grey', fontFamily: 'SourceCodePro',fontSize: 11 }}>{item.date}</Text>
                                    <Text style={{ color: 'grey', fontFamily: 'SourceCodePro',fontSize: 11 }}>{item.route}</Text>
                                </View>
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                    <TouchableOpacity
                                        onPress={()=>{this.props.navigation.navigate("TrackScreen")}}
                                        style={{
                                            backgroundColor: "#C4C4C4",
                                            width: '100%',
                                            height: "50%",
                                            justifyContent: 'center',
                                            alignItems: 'center'

                                        }}
                                    >
                                        <Text style={{ color: 'white', fontWeight: 'bold' }}>Delivered</Text>
                                    </TouchableOpacity>
                                </View>

                            </View>
                        }
                    />
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
    flatListContainer: {
        flex: 1,
        width: '95%',

    },
    listItems: {   
        paddingHorizontal: 5, 
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomColor: 'white',
        borderBottomWidth: 1,

    },
})