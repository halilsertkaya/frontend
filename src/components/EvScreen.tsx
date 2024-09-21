import React, { useLayoutEffect } from 'react';
import { View, Text, Button, StyleSheet, Image, ImageBackground, Animated, TouchableOpacity } from 'react-native';

const EvScreen: React.FC = ({ navigation }: any) => {

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation])

  const startGame = () => {
    navigation.navigate('Oyun');
  };

  // Sun & Cloud Animations
  const sunAnimation = new Animated.Value(0);
  const cloudAnimation = new Animated.Value(0);

  Animated.loop(
    Animated.sequence([
      Animated.timing(sunAnimation, {
        toValue: 1,
        duration: 5000,
        useNativeDriver: true,
      }),
      Animated.timing(sunAnimation, {
        toValue: 0,
        duration: 5000,
        useNativeDriver: true,
      }),
    ])
  ).start();

  Animated.loop(
    Animated.sequence([
      Animated.timing(cloudAnimation, {
        toValue: 1,
        duration: 15000,
        useNativeDriver: true,
      }),
      Animated.timing(cloudAnimation, {
        toValue: 0,
        duration: 15000,
        useNativeDriver: true,
      }),
    ])
  ).start();

  const sunTranslateY = sunAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -30],
  });

  const cloudTranslateX = cloudAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [-50, 350],
  });

  return (
    <ImageBackground source={require('../assets/background.png')} style={styles.container}>
      <Animated.View style={[styles.sun, { transform: [{ translateY: sunTranslateY }] }]}>
        <Image source={require('../assets/sun.png')} style={styles.sunImage} />
      </Animated.View>
      <Animated.View style={[styles.cloud, { transform: [{ translateX: cloudTranslateX }] }]}>
        <Image source={require('../assets/cloud.png')} style={styles.cloudImage} />
      </Animated.View>
      <View style={styles.content}>
        {/* Half opacity background for text */}
          <View style={styles.titleWrapper}>
            <Text style={styles.title}>Aşağıdaki tarot falı seçeneklerinden herhangi birini seçip devam edin.</Text>
          </View>
      </View>
      {/* Custom button */}
      <TouchableOpacity style={styles.buttonWrapper} onPress={startGame}>
          <Text style={styles.buttonText}>3 Kartlı Tarot Falı</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

// Stiller
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5DA3BE',
  },
  titleWrapper: {
    backgroundColor: '#3D3D3D88',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 17,
    color: '#fff',
  },
  sun: {
    position: 'absolute',
    top: 50,
    left: 50,
    width: 72,
    height: 72,
  },
  sunImage: {
    width: '100%',
    height: '100%',
  },
  cloud: {
    position: 'absolute',
    top: 100,
    right: -100,
    width: 144,
    height: 144,
  },
  cloudImage: {
    width: '100%',
    height: '100%',
  },
  content: {
    position: 'absolute',
    bottom: 100,
    width:'100%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonWrapper: {
    position: 'absolute',
    bottom: 30,
    width: '80%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    borderRadius: 15,
    backgroundColor: '#6D4592',
    fontSize: 16,
    padding: 15,
    fontWeight: 'bold',
    borderWidth: 2,
    borderColor: 'grey',
    overflow: 'hidden',
  }
});

export default EvScreen;