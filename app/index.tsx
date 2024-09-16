import {
  Text,
  View,
  StyleSheet,
  Image
} from "react-native";
import { Link } from 'expo-router';
import { CustomCard } from "@/components/Card";
import { rgbaColor } from "react-native-reanimated/lib/typescript/reanimated2/Colors";

export default function Index() {
  return (
    <View>
      <View style={style.container}>
        <Image
          style={style.tinyLogo}
          source={require('./img/1.jpg')}
        />
        <Text style={[style.textName, style.allText]}>
          Jovanka Priandanu
        </Text>
        <Link style={style.linkText} href="/exp">Experience</Link>
        <Text style={[style.subText, style.allText]}>
          |ShortList|
        </Text>
      </View>
      <View style={style.border}>
        <CustomCard name="Figma" con="UI/UX Design" number="1" />
        <CustomCard name="Aseprite" con="2D Pixelart" number="2" />
        <CustomCard name="Godot Engine" con="Game Engine" number="3" />
      </View>

    </View>
  );
}

const style = StyleSheet.create({
  allText: {
    marginBottom: 3,
    color: "white",
  },
  container: {
    backgroundColor: "#6c7a89",
    height: 250,
    borderBottomEndRadius: 15,
    borderBottomStartRadius: 15,
    justifyContent: "center",
    alignItems: "center"
  },
  textName: {
    fontSize: 24
  },
  subText: {
    fontSize: 14,
  },
  tinyLogo: {
    width: 150,
    height: 150,
    borderRadius: 100,
    borderColor: "white",
    borderWidth: 5,
  },
  border: {
    top: -20,
    paddingLeft: 20,
    paddingRight: 25,
  },

  linkText: {
    color: "#1d3146",
    fontSize: 18,

  }

})