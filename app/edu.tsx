import { Text, View, StyleSheet } from "react-native";

export default function Exp() {
    return (
        <View style={style.container}>
            <Text style={style.Texttitle}>Education</Text>
            <Text style={style.Textedu}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed consequatur dicta repudiandae odit, maxime natus quod aspernatur recusandae nihil numquam possimus eaque impedit, perspiciatis magni omnis velit cupiditate hic neque.</Text>
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
    Texttitle: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'left',
        color: 'white',
        marginBottom: 12,
    },
    Textedu: {
        fontSize: 12,
        color: 'white',
        textAlign: 'justify',
        marginLeft: 8,
        marginRight: 8,
    },
})