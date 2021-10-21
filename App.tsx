/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DetailsScreen from './containers/DetailsScreen';
import HomeScreen from './containers/HomeScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Pokemon"
          options={{
            title: 'Pokemons',
            headerStyle: {},
          }}>
          {props => <HomeScreen {...props} component={HomeScreen} />}
        </Stack.Screen>
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{
            headerBackTitle: 'Pokemon',
            title: null,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
