import React from 'react';

import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const PokemonBtn = ({obj, index}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      key={index}
      style={styles.btnShape}
      onPress={() => navigation.navigate('Details', {name: obj.name})}>
      <Text style={styles.textAppearence}>{obj.name.toUpperCase()}</Text>
    </TouchableOpacity>
  );
};

export default PokemonBtn;

const styles = StyleSheet.create({
  btnShape: {
    backgroundColor: 'red',
    margin: 10,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textAppearence: {
    color: 'white',
    fontSize: 25,
  },
});
