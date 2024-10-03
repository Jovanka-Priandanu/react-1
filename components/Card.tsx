import { Text, View, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export const CustomCard = (props: any) => {
    return (
        <Link href={props.path} style={styles.section}>
            <View>
                <View style={styles.leftbox}>
                    <Text style={styles.title}>{props.label}</Text>
                    <Text>{props.desc}</Text>
                </View>
                <View style={styles.rightbox}>
                    {/* <Text style={styles.number}>{props.number}</Text> */}
                </View>
            </View>
        </Link>
    )
}
const styles = StyleSheet.create({
    section: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: 25,
        borderRadius: 10,
        marginTop: 10,
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