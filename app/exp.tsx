import { Text, View, StyleSheet, ScrollView } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';

export default function Exp() {
    return (
        <ScrollView>
            <View style={styles.section}>
                <Text style={styles.header}>Work Experience</Text>

                <View style={styles.container}>
                    <AntDesign name="laptop" size={24} color="#6c7a89" style={styles.icon} />
                    <View style={styles.info}>
                        <Text style={styles.label}>IT Support:</Text>
                        <View style={styles.row}>
                            <Text style={styles.value}>CV ProtonTechindo</Text>
                            <Text style={styles.lenght}>18 January - April 2021</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.container}>
                    <AntDesign name="setting" size={24} color="#6c7a89" style={styles.icon} />
                    <View style={styles.info}>
                        <Text style={styles.label}>Engineer:</Text>
                        <View style={styles.row}>
                            <Text style={styles.value}>PT Dubbs Energi Teknologi Indonesia</Text>
                            <Text style={styles.lenght}>5 August - 5 October 2024</Text>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    section: {
        padding: 20,
        backgroundColor: 'white',
        borderColor: 'whitesmoke',
        borderWidth: 2,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 10,
        padding: 15,
        backgroundColor: 'white',
    },
    icon: {
        marginRight: 10,
    },
    info: {
        flex: 1,
    },
    label: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 5,
    },
    value: {
        fontSize: 12,
        color: 'grey',
        flex: 1,
    },

    row: {
        flexDirection: 'row',
    },

    lenght: {
        fontSize: 12,
    },
});
