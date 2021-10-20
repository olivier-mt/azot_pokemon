import React from 'react';

import {Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const PokemonBtn = ({obj, index}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      key={index}
      onPress={() => navigation.navigate('Details', {name: obj.name})}>
      <Text>{obj.name}</Text>
    </TouchableOpacity>
  );
};

export default PokemonBtn;
