import { Text, View, StyleSheet, ScrollView } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';

export default function Bio() {
    return (
        <ScrollView>
            <View style={styles.section}>
                <Text style={styles.header}>Personal Details</Text>

                <View style={styles.container}>
                    <AntDesign name="user" size={24} color="#6c7a89" style={styles.icon} />
                    <View style={styles.info}>
                        <Text style={styles.label}>Full Name:</Text>
                        <Text style={styles.value}>Jovanka Priandanu</Text>
                    </View>
                </View>

                <View style={styles.container}>
                    <AntDesign name="mail" size={24} color="#6c7a89" style={styles.icon} />
                    <View style={styles.info}>
                        <Text style={styles.label}>Email:</Text>
                        <Text style={styles.value}>konojovankada@gmail.com</Text>
                    </View>
                </View>

                <View style={styles.container}>
                    <AntDesign name="phone" size={24} color="#6c7a89" style={styles.icon} />
                    <View style={styles.info}>
                        <Text style={styles.label}>Phone Number:</Text>
                        <Text style={styles.value}>0812345678</Text>
                    </View>
                </View>

                <View style={styles.container}>
                    <AntDesign name="home" size={24} color="#6c7a89" style={styles.icon} />
                    <View style={styles.info}>
                        <Text style={styles.label}>Address:</Text>
                        <Text style={styles.value}>Jl. Kelapa Muda</Text>
                    </View>
                </View>

                <View style={styles.container}>
                    <AntDesign name="rest" size={24} color="#6c7a89" style={styles.icon} />
                    <View style={styles.info}>
                        <Text style={styles.label}>Hobby:</Text>
                        <Text style={styles.value}>Writing Novels</Text>
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
        padding: 10,
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
    },
    value: {
        fontSize: 16,
        color: 'grey',
    },
});
