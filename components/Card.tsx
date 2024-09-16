import { Text, View, StyleSheet } from 'react-native';

export const CustomCard = (props: any) => {
    return (
        <View style={styles.container}>
            <View style={styles.leftbox}>
                <Text style={styles.title}>{props.name}</Text>
                <Text>{props.con}</Text>
            </View>
            <View style={styles.rightbox}>
                <Text style={styles.number}>{props.number}</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'whitesmoke',
        padding: 25,
        borderRadius: 10,
        marginTop: 10,
        borderColor: "black",
        borderWidth: 2,
    },
    leftbox: {
        flex: 2,
    },
    rightbox: {
        flex: 1,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 14,
        color: 'gray',
    },
    number: {
        fontSize: 24,
        color: 'gray',
        textAlign: 'center',
    }

})