import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

import {useGetPokemonByNameQuery} from '../services/pokemon';

const DetailsScreen = ({route}) => {
  const [toggle, setToggle] = useState(true);

  const {name} = route.params;

  const {data, error, isLoading} = useGetPokemonByNameQuery(name);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        //justifyContent: 'center'
      }}>
      {error ? (
        <Text>Oh no, there was an error</Text>
      ) : isLoading ? (
        <View style={styles.main}>
          <ActivityIndicator size="large" color="red" />
        </View>
      ) : data ? (
        <View style={styles.main}>
          <Text style={styles.textAppearence}>{name}</Text>

          <Image
            source={{
              uri: toggle
                ? data.sprites.front_default
                : data.sprites.back_default,
            }}
            alt={data.species.name}
            style={{width: 200, height: 200}}
          />

          <TouchableOpacity
            style={styles.btn}
            onPress={() => setToggle(!toggle)}>
            {/*<Ionicons name="ios-arrow-redo-outline" size={24} color="black" />*/}
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );
};

export default DetailsScreen;

const btnSize = 50;

const styles = StyleSheet.create({
  main: {
    // backgroundColor: 'blue',
    margin: 20,
    height: 300,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  textAppearence: {
    color: 'black',
    fontSize: 25,
  },

  btn: {
    width: btnSize,
    height: btnSize,
    backgroundColor: 'red',
    borderRadius: btnSize / 2,
  },
});
