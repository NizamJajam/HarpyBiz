import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native';
const windowHeight = Dimensions.get('window').height;

export default class HomeScreen extends React.Component {
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
            <View style={styles.main}>
                <View style={styles.wallpaperView}>
                    <Image
                        style={{
                            width: '110%',
                            height: '110%'
                        }}
                        source={this.state.wallPaper}
                        resizeMode="contain"

                    />
                </View>
                <View style={styles.contentView}>
                    <View style={styles.userDetails}>
                        <View style={styles.imageContainer}>
                            <Image
                                source={require("../assets/manPhoto.png")}
                                style={{
                                    width: 110,
                                    height: 110,
                                    flex: 1,
                                    left: -30
                                }}
                                resizeMode="contain"
                            />
                        </View>
                        <View style={{ paddingLeft: 10 }}>
                            <Text style={styles.businessOwner}>{this.state.businessOwner}</Text>
                            <Text style={styles.companyName}>{this.state.companyName}</Text>
                        </View>
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.buttons} onPress={() => { this.props.navigation.navigate("Parcel") }}>
                            <Image
                                source={require("../assets/Parcel.png")}
                                style={{
                                    width: 35,
                                    height: 35,
                                    flex: 1,
                                }}
                                resizeMode="contain"
                            />
                            <Text style={styles.buttonText}>Parcel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttons} onPress={() => { this.props.navigation.navigate("OnGoing") }}>
                            <Image
                                source={require("../assets/onGoing.png")}
                                style={{
                                    width: 35,
                                    height: 35,
                                    flex: 1,
                                }}
                                resizeMode="contain"
                            />
                            <Text style={styles.buttonText}>OnGoing</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttons} onPress={() => { this.props.navigation.navigate("Delivered") }}>
                            <Image
                                source={require("../assets/Delivered.png")}
                                style={{
                                    width: 35,
                                    height: 35,
                                    flex: 1,
                                }}
                                resizeMode="contain"
                            />
                            <Text style={styles.buttonText}>Delivered</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.recentDeliveries}>
                        <Text style={{ color: 'black', fontSize: 19, fontFamily: 'SourceCodePro-SemiBold', }}>Recent Deliveries</Text>
                        <View style={styles.flatListContainer}>
                            <FlatList style={{ flex: 1 }}
                                data={this.state.Deliveries}
                                ItemSeparatorComponent={this.FlatListItemSeparator}
                                renderItem={({ item }) =>
                                    <View style={styles.listItems}>
                                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                            <View style={{ backgroundColor: 'white', width: "90%", height: '80%', justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: "#FAAF40", borderRadius: 10 }}>
                                                <Image
                                                    source={item.image}
                                                    resizeMode="contain"
                                                />
                                            </View>

                                        </View>
                                        <View style={{ flex: 3, padding: 10 }}>
                                            <Text style={{ color: 'black', fontFamily: 'SourceCodePro-SemiBold', }}>{item.username}</Text>
                                            <Text style={{ color: 'grey', fontFamily: 'SourceCodePro', fontSize: 11}}>{item.date}</Text>
                                            <Text style={{ color: 'grey', fontFamily: 'SourceCodePro', fontSize: 11 }}>{item.route}</Text>
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
                </View>
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
        backgroundColor: "#FFFFFF",
        justifyContent: 'center',
        alignItems: 'center',
    },
    wallpaperView: {
        flex: 2,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.5,
        backgroundColor: "#979797",
        overflow: 'hidden'
    },
    contentView: {
        flex: 6,
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

});