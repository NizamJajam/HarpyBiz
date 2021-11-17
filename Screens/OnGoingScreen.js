import React from 'react';
import { View, Text, StyleSheet, Dimensions, FlatList, Image, TouchableOpacity } from 'react-native';
const windowHeight = Dimensions.get('window').height;

export default class OnGoingScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            OnGoing: [
                {
                    image: require("../Assets/tShirt.png"),
                    username: "Karl Musakkal",
                    date: "Saturday, 10 September 2021",
                    route: "Kota Kinabalu - Tawau",
                    details: "",
                },
                {
                    image: require("../Assets/sneakers.png"),
                    username: "Mohamed Amrin",
                    date: "Saturday, 10 September 2021",
                    route: "Kota Kinabalu - Tawau",
                    details: "",
                },
                {
                    image: require("../Assets/tShirt.png"),
                    username: "Jack",
                    date: "Saturday, 10 September 2021",
                    route: "Kota Kinabalu - Tawau",
                    details: "",
                },
                {
                    image: require("../Assets/sneakers.png"),
                    username: "Borhanuddin",
                    date: "Saturday, 10 September 2021",
                    route: "Kota Kinabalu - Tawau",
                    details: "",
                },
                {
                    image: require("../Assets/makeup.png"),
                    username: "Yusliena",
                    date: "Saturday, 10 September 2021",
                    route: "Kota Kinabalu - Tawau",
                    details: "",
                },
                {
                    image: require("../Assets/makeup.png"),
                    username: "Nawie",
                    date: "Saturday, 10 September 2021",
                    route: "Kota Kinabalu - Tawau",
                    details: "",
                },
                {
                    image: require("../Assets/makeup.png"),
                    username: "Sani Badawi",
                    date: "Saturday, 10 September 2021",
                    route: "Kota Kinabalu - Tawau",
                    details: "",
                },
                {
                    image: require("../Assets/makeup.png"),
                    username: "Razwan",
                    date: "Saturday, 10 September 2021",
                    route: "Kota Kinabalu - Tawau",
                    details: "",
                },
                {
                    image: require("../Assets/makeup.png"),
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
                        data={this.state.OnGoing}
                        ItemSeparatorComponent={this.FlatListItemSeparator}
                        renderItem={({ item }) =>
                            <View style={styles.listItems}>
                                {/* <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                            <View style={{ backgroundColor: 'white', width: "90%", height: '90%', justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: "#FAAF40", borderRadius: 10 }}>
                                                <Image
                                                    source={item.image}
                                                    resizeMode="contain"
                                                />
                                            </View>

                                        </View> */}
                                <View style={{ flex: 3, padding: 10 }}>
                                    <Text style={{ color: 'black', fontWeight: 'bold' }}>{item.username}</Text>
                                    <Text style={{ color: 'grey' }}>{item.date}</Text>
                                    <Text style={{ color: 'grey' }}>{item.route}</Text>
                                </View>
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                    <TouchableOpacity
                                        onPress={() => { this.props.navigation.navigate("DetailsScreen") }}
                                        style={{
                                            backgroundColor: "#FAAF40",
                                            width: '100%',
                                            height: "50%",
                                            justifyContent: 'center',
                                            alignItems: 'center'

                                        }}
                                    >
                                        <Text style={{ color: 'white' }}>Details</Text>
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
        padding: 5,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomColor: 'white',
        borderBottomWidth: 1,
    },
})