import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import DestaquesScreen from './screens/DestaquesScreen.js';
import BuscaScreen from './screens/BuscaScreen.js';
import IndicacaoScreen from './screens/IndicacaoScreen.js';
import ContatoScreen from './screens/ContatoScreen.js';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Destaques') {
              iconName = focused ? 'star' : 'star-outline';
            } else if (route.name === 'Busca') {
              iconName = focused ? 'search' : 'search-outline';
            } else if (route.name === 'Indicação') {
              iconName = focused ? 'heart' : 'heart-outline';
            } else if (route.name === 'Contato') {
              iconName = focused ? 'information-circle' : 'information-circle-outline';
            }

            // You can return any component that you like here!
            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Destaques" component={DestaquesScreen} />
        <Tab.Screen name="Busca" component={BuscaScreen} />
        <Tab.Screen name="Indicação" component={IndicacaoScreen} />
        <Tab.Screen name="Contato" component={ContatoScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
