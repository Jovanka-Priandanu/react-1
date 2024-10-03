import {
  Text,
  View,
  FlatList,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import { CustomCard } from '@/components/Card';

export default function Index() {
  const data = [
    {
      id: '1',
      label: 'Bio',
      desc: 'About Myself',
      path: '/bio'
    },
    {
      id: '2',
      label: 'Experience',
      desc: 'Experience Section',
      path: '/exp'
    },
    {
      id: '3',
      label: 'Education',
      desc: 'My Education',
      path: '/edu'
    },
    {
      id: '4',
      label: 'Certificate',
      path: '/certificate',
      desc: 'My Certificate So Far',
    },

    {
      id: '5',
      label: 'Admin',
      path: '/(tabs)',
      desc: 'aa',
    },


  ];
  return (
    <ScrollView>
      <View>
        <View style={style.container}>
          <Image
            style={style.tinyLogo}
            source={require('./img/1.jpg')}
          />
          <Text style={style.textName}>
            Jovanka Priandanu
          </Text>
          <Text style={[style.subText, style.textWhite]}>
            |Norreffu|
          </Text>
        </View>
        <View style={style.border}>
          <FlatList
            data={data}
            renderItem={({ item }) => <CustomCard
              label={item.label}
              desc={item.desc}
              path={item.path}
            />
            }
            keyExtractor={item => item.id}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: "#6c7a89",
    height: 250,
    borderBottomEndRadius: 32,
    borderBottomStartRadius: 32,
    justifyContent: "center",
    alignItems: "center"
  },
  textName: {
    color: "white",
    fontSize: 24
  },
  subText: {
    fontSize: 14
  },
  textWhite: {
    color: "white"
  },
  tinyLogo: {
    width: 100,
    height: 100,
    borderRadius: 100,
    borderWidth: 5,
    borderColor: 'white',
  },
  border: {
    top: -25,
    paddingLeft: 20,
    paddingRight: 25
  }
});