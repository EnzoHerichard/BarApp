import React, { useState, useRef } from 'react';
import { StatusBar, Animated, Easing } from 'react-native';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Carte() {
  const [sectionIndex, setSectionIndex] = useState(0);
  const animationValue = useRef(new Animated.Value(0)).current;

  const sections = [
    {
      title: 'Bières',
      subtitle: 'Découvrez notre sélection de bières',
      iconName: 'beer',
    },
    {
      title: 'Tapas',
      subtitle: 'Dégustez nos délicieux tapas',
      iconName: 'restaurant',
    },
    {
      title: 'Vins',
      subtitle: 'Explorez notre carte des vins',
      iconName: 'wine',
    },
  ];

  const beers = [
    { name: 'Leffe Ruby', price: '7€', alcohol: '4°' },
    { name: 'Chimay Blue', price: '9€', alcohol: '9°' },
    { name: 'Guinness Draught', price: '6€', alcohol: '4.2°' },
    { name: 'Kwak', price: '8€', alcohol: '8.4°' },
    { name: 'Corona', price: '5€', alcohol: '4.5°' },
    { name: 'Desperados', price: '6€', alcohol: '5.9°' },
  ];

  const tapas = [
    { name: 'Assiette de charcuterie', price: '8€' },
    { name: 'Assiette de fromage', price: '8€' },
    { name: 'Assiette de tapas', price: '10€' },
    { name: 'Assiette de frites', price: '5€' },
    { name: 'Wings de poulet', price: '7€' },
  ];

  const wines = [
    { name: 'Château La Tour de By', price: '9€' },
    { name: 'Sauvignon', price: '7€' },
    { name: 'Chardonnay', price: '4€' },
    { name: 'Sauterne', price: '9€' },
    { name: 'Côte du Rhône', price: '6€' },
  ];

  const nextSectionName = '> ' + sections[(sectionIndex + 1) % sections.length].title;

  const navigateToPreviousSection = () => {
    Animated.timing(animationValue, {
      toValue: 1,
      duration: 300,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start(() => {
      setSectionIndex(prevIndex => (prevIndex > 0 ? prevIndex - 1 : sections.length - 1));
      animationValue.setValue(0);
    });
  };

  const navigateToNextSection = () => {
    Animated.timing(animationValue, {
      toValue: 1,
      duration: 300,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start(() => {
      setSectionIndex(prevIndex => (prevIndex < sections.length - 1 ? prevIndex + 1 : 0));
      animationValue.setValue(0);
    });
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/background2.png')} style={styles.backgroundImage}>
        <View style={styles.overlay} />
        <Animated.View style={[styles.contentContainer, {
          transform: [
            {
              translateX: animationValue.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 25],
              }),
            },
          ],
        }]}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{sections[sectionIndex].title}</Text>
            <Text style={styles.nextSection}>{nextSectionName}</Text>
          </View>
          <TouchableOpacity style={styles.arrowButtonLeft} onPress={navigateToPreviousSection}>
            <Ionicons name="arrow-back" size={24} color="#fff" />
          </TouchableOpacity>
          {sectionIndex === 0 && (
            <ScrollView style={styles.beerContainer}>
              {beers.map((beer, index) => (
                <View key={index} style={styles.beerItem}>
                  <Text style={styles.beerName}>{beer.name}</Text>
                  <Text style={styles.beerDetails}>{beer.price} - {beer.alcohol}</Text>
                </View>
              ))}
            </ScrollView>
          )}
          {sectionIndex === 1 && (
            <ScrollView style={styles.beerContainer}>
              {tapas.map((tapas, index) => (
                <View key={index} style={styles.beerItem}>
                  <Text style={styles.beerName}>{tapas.name}</Text>
                  <Text style={styles.beerDetails}>{tapas.price}</Text>
                </View>
              ))}
            </ScrollView>
          )}
          {sectionIndex === 2 && (
            <ScrollView style={styles.beerContainer}>
              {wines.map((wine, index) => (
                <View key={index} style={styles.beerItem}>
                  <Text style={styles.beerName}>{wine.name}</Text>
                  <Text style={styles.beerDetails}>{wine.price}</Text>
                </View>
              ))}
            </ScrollView>
          )}

          <TouchableOpacity style={styles.arrowButtonRight} onPress={navigateToNextSection}>
            <Ionicons name="arrow-forward" size={24} color="#fff" />
          </TouchableOpacity>
        </Animated.View>
      </ImageBackground>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginTop: 70,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 8,
  },
  arrowButtonLeft: {
    backgroundColor: '#8B0000',
    padding: 10,
    borderRadius: 20,
    marginBottom: 20,
    position: 'absolute',
    left: 20,
    top: '50%',
    transform: [{ translateY: 20 }],
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrowButtonRight: {
    backgroundColor: '#8B0000',
    padding: 10,
    borderRadius: 20,
    marginBottom: 20,
    position: 'absolute',
    right: 20,
    top: '50%',
    transform: [{ translateY: 20 }],
    alignItems: 'center',
    justifyContent: 'center',
  },
  beerContainer: {
    maxHeight: 300,
  },
  beerItem: {
    backgroundColor: '#8B0000',
    padding: 7,
    marginBottom: 10,
    borderRadius: 10,
    width: 240,
  },
  beerName: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  beerDetails: {
    fontSize: 16,
    color: '#fff',
  },
  nextSection: {
    fontSize: 16,
    color: 'black',
    marginLeft: 10,
    opacity: 0.5,
  },
  titleContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: 60,
  },
});
