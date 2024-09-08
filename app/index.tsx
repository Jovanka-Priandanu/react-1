import { Text, View, StyleSheet, Image } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { Link } from "expo-router";

export default function Index() {
  return (
    <View style={style.container}>
      <Image
        style={style.tinyLogo}
        source={require('./img/1.jpg')}
      />
      <Text style={style.Textname}>
        Jovanka Priandanu
      </Text>
      <Text style={style.Textdesc}>Lorem Ipsum</Text>
      <View style={style.containerLink}>
        <Ionicons name="school" size={32} color="black" style={style.Iconstyle} />
        <Link href="/edu" style={style.Linkstyle}>Education</Link>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: "crimson",
    height: 300,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  Textname: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },

  Textdesc: {
    fontSize: 12,
    color: 'white',
    marginBottom: 12,
    marginTop: 12,
    textAlign: "center",
  },

  Linkstyle: {
    color: "black",
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },

  Iconstyle: {
    position: 'absolute',
    left: 10,
  },

  tinyLogo: {
    width: 150,
    height: 150,
    borderRadius: 125,
    marginBottom: 8,
    borderColor: 'white',
    borderWidth: 3,
  },

  containerLink: {
    backgroundColor: 'whitesmoke',
    width: 200,
    height: 50,
    borderRadius: 90,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    position: 'relative',
  },
});
