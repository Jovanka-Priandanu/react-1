import { Text, View, StyleSheet } from "react-native";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function Bio() {
    return (
        <View style={style.container}>
            <Text style={style.textTitle}>404 Not Found</Text>
            <Text style={style.textSub}>(Blom diisi)</Text>
            <MaterialCommunityIcons name="certificate" size={80} color="white" />
        </View >
    );
}

const style = StyleSheet.create({
    container: {
        backgroundColor: "#6c7a89",
        height: 250,
        alignItems: "center",
        justifyContent: "center",

    },
    textTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'left',
        color: 'white',
    },
    textSub: {
        fontSize: 20,
        color: "white",
        marginBottom: 12,
    }
})