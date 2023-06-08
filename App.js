import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import Accueil from './screens/AccueilScreen';
import PromotionsScreen from './screens/PromotionsScreen';
import Carte from './screens/CarteScreen';
import Bottle from './screens/BottleScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Accueil"
          component={Accueil}

          options={({ navigation }) => ({
            title: 'Accueil',
            
            headerRight: () => (
              <View style={styles.menu}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Promotions')}
                  style={styles.menuButton}
                >
                  <Text style={styles.menuButtonText}>Promotions</Text>
                </TouchableOpacity>
              </View>
            ),
            headerLeft: () => (
              <View style={styles.menuGame}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Bottle')}
                  style={styles.menuButton}
                >
                  <Text style={styles.menuButtonText}>BottleGame</Text>
                </TouchableOpacity>
              </View>
            ),
          })}
        />
        <Stack.Screen name="Promotions" component={PromotionsScreen} />
        <Stack.Screen name="Bottle" component={Bottle} />
        
        <Stack.Screen
          name="Carte"
          component={Carte}
          options={{ title: 'Carte' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  menu: {
    marginRight: 10,
  },
  menuGame: {
    marginLeft: 10,
  },
  menuButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#8B0000',
    borderRadius: 5,
  },
  menuButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  menuButtonGame: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },

});
