import { Text, View, StyleSheet, ScrollView, Image } from "react-native";

export default function Exp() {
    return (
        <ScrollView>
            <View style={styles.section}>
                <Text style={styles.header}>Education History</Text>

                <View style={styles.container}>
                    <Image
                        style={styles.logo}
                        source={require('./img/logo-smk.png')}
                    />
                    <View style={styles.info}>
                        <Text style={styles.label}>SMK PANJATEK:</Text>
                        <View style={styles.row}>
                            <Text style={styles.value}>Computer And Networking Engineering</Text>
                            <Text style={styles.lenght}>2019 - 2022</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.container}>
                    <Image
                        style={styles.logo}
                        source={require('./img/logo-lp3i.png')}
                    />
                    <View style={styles.info}>
                        <Text style={styles.label}>LP3I Polytechnic:</Text>
                        <View style={styles.row}>
                            <Text style={styles.value}>Informatics Management</Text>
                            <Text style={styles.lenght}>2022 - 2025</Text>
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
    info: {
        flex: 1,
    },

    logo: {
        width: 50,
        height: 70,
        marginRight: 10,
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
