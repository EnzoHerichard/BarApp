import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Animated, Easing, Modal } from 'react-native';

export default function Bottle() {
  const [rotateValue] = useState(new Animated.Value(0));
  const [randomGorge, setRandomGorge] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);

  const startAnimation = () => {
    const randomAngle = Math.floor(Math.random() * 2000) + 1;
    const duration = 3500;

    Animated.timing(rotateValue, {
      toValue: randomAngle,
      duration: duration,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start(() => {
      const randomGorgeValue = Math.floor(Math.random() * 7) + 1;
      setRandomGorge(randomGorgeValue);
      setModalVisible(true);
    });
  };

  const interpolatedRotateAnimation = rotateValue.interpolate({
    inputRange: [0, 1800],
    outputRange: ['0deg', '1800deg'],
  });

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/background2.png')} style={styles.backgroundImage}>
        <TouchableOpacity style={styles.bottleContainer} onPress={startAnimation}>
          <Animated.Image
            style={[styles.bottle, { transform: [{ rotate: interpolatedRotateAnimation }] }]}
            source={require('../assets/bottlebeer.png')}
          />
        </TouchableOpacity>
        <Modal animationType="fade" transparent={true} visible={modalVisible}>
          <View style={styles.modalContainer}>
            <Text style={styles.gorgeText}>{randomGorge} gorgées !</Text>
            <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.closeButtonText}>Fermer</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <Text style={styles.subtitle}>Appuyez sur la bouteille pour la faire tourner</Text>
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
  bottleContainer: {
    width: 340,
    height: 340,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    top: 20,
  },
  bottle: {
    width: 250,
    height: 300,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  gorgeText: {
    fontSize: 40,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
  },
  closeButton: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    fontSize: 18,
    color: '#000',
  },
});
