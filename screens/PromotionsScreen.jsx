import React from 'react';
import { StyleSheet, Text, View, Image, Animated,ImageBackground } from 'react-native';

export default function PromotionsScreen() {
  const fadeAnim = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/background2.png')} style={styles.backgroundImage}>
      <Animated.View style={[styles.promoContainer, { opacity: fadeAnim }]}>
        <Image source={require('../assets/biere.png')} style={styles.beerImage} />
        <Text style={styles.promoText}>Bière du moment</Text>
        <Text style={styles.beerName}>Frambush</Text>
        <Text style={styles.beerDetails}>Robe ambrée, arômes framboise</Text>
        <Text style={styles.beerPrice}>Prix : 7.30€ </Text> 
        <Text style={styles.PriceBarre}>8.40€</Text>
      </Animated.View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  promoContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop : 90,
  },
  beerImage: {
    width: 130,
    height: 130,
    marginBottom: 20,
  },
  promoText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  beerName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'black',

  },
  beerDetails: {
    fontSize: 16,
    marginBottom: 10,
    color: 'black',
  },
  beerPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  PriceBarre: {
    textDecorationLine: 'line-through',
    fontSize: 16,
  }
});
