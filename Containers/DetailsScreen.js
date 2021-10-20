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
} from 'react-native';

import {useGetPokemonByNameQuery} from '../services/pokemon';

const DetailsScreen = ({route}) => {
  const [toggle, setToggle] = useState(true);

  const {name} = route.params;

  const {data, error, isLoading} = useGetPokemonByNameQuery(name);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>{name}</Text>
      {error ? (
        <Text>Oh no, there was an error</Text>
      ) : isLoading ? (
        <Text>Loading...</Text>
      ) : data ? (
        <View>
          {
            <Image
              source={{
                uri: toggle
                  ? data.sprites.front_default
                  : data.sprites.back_default,
              }}
              alt={data.species.name}
              style={{width: 200, height: 200}}
            />
          }
          <TouchableOpacity
            style={{width: 50, height: 50, backgroundColor: 'red'}}
            onPress={() => setToggle(!toggle)}
          />
        </View>
      ) : null}
    </View>
  );
};

export default DetailsScreen;
