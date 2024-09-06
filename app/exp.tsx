import { Text, View, StyleSheet } from "react-native";

export default function Exp() {
    return (
        <View style={style.container}>
            <Text style={style.Textname}>
                Experience
            </Text>
            <Text style={style.Textdesc}>Lorem Ipsum</Text>
        </View >
    );
}

const style = StyleSheet.create({
    container: {
        backgroundColor: "crimson",
        height: 250,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        alignItems: "center",
        justifyContent: "center",

    },
    Textname: {
        fontSize: 24,
        fontWeight: "bold",
        color: "white",

    },

    Textdesc: {
        fontSize: 12,
        color: 'white',
    },
})