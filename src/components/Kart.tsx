import React, { useEffect, useState, useRef } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Animated, Text } from 'react-native';

interface KartProps {
  title: string;
  frontImage: any;
  onPress: () => void;
  disabled?: boolean;
  flipped?: boolean;
}

const Kart: React.FC<KartProps> = ({ title, frontImage, onPress, disabled = false, flipped = false }) => {
  const [localFlipped, setLocalFlipped] = useState(flipped);
  const rotateAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    setLocalFlipped(flipped);
  }, [flipped]);

  useEffect(() => {
    Animated.parallel([
      Animated.timing(rotateAnim, {
        toValue: localFlipped ? 180 : 0,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: localFlipped ? 1 : 0,
        duration: localFlipped ? 500 : 200,
        useNativeDriver: true,
      })
    ]).start();
  }, [localFlipped]);

  const rotateInterpolate = rotateAnim.interpolate({
    inputRange: [0, 180],
    outputRange: ['0deg', '180deg'],
  });

  const animatedStyle = {
    transform: [{ rotateY: rotateInterpolate }],
  };

  const handlePress = () => {
    if (!disabled) {
      onPress(); // Ters çevirme durumu dışarıdan kontrol ediliyor
    }
  };

  return (
    <TouchableOpacity
      style={[styles.card, localFlipped && styles.cardFlipped, disabled && styles.cardDisabled]}
      onPress={handlePress}
      activeOpacity={0.7}
    >
      <Animated.View style={[styles.cardInner, animatedStyle]}>
        <View style={[styles.cardFace, localFlipped && styles.cardFaceBack]}>
          <Image source={localFlipped ? frontImage : require('../assets/cards/0.png')} style={styles.cardImage} />
        </View>
      </Animated.View>
      {localFlipped && (
        <Animated.View style={[styles.cardTitleContainer, { opacity: fadeAnim }]}>
          <Text style={styles.cardTitle}>{title}</Text>
        </Animated.View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 77,
    height: 139,
    perspective: 500,
    margin: 0,
    alignItems: 'center',
  },
  cardFlipped: {
    zIndex: 2,
  },
  cardInner: {
    width: '100%',
    height: 139,
    position: 'relative',
    transformStyle: 'preserve-3d',
  },
  cardFace: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: 8,
    backfaceVisibility: 'hidden',
  },
  cardFaceBack: {
    backgroundColor: '#fff',
    zIndex: 2,
  },
  cardImage: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
    resizeMode: 'cover',
  },
  cardTitleContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    alignItems: 'center',
  },
  cardTitle: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  cardDisabled: {
    opacity: 0.5,
  },
});

export default Kart;
