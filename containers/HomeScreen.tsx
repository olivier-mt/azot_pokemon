import React from 'react';

import {useGetFirstPokemonQuery} from '../services/pokemon';
import PokemonBtn from '../components/PokemonBtn';

import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const HomeScreen = ({navigation}) => {
  const {data, error, isLoading} = useGetFirstPokemonQuery('100');

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        {error ? (
          <Text>Oh no, there was an error</Text>
        ) : isLoading ? (
          <Text>Loading...</Text>
        ) : data ? (
          <View>
            {data.results.map((obj, index) => {
              return <PokemonBtn obj={obj} index={index} />;
            })}
          </View>
        ) : null}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
