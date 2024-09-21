import React, { useState, useEffect, useCallback, useLayoutEffect, useRef } from 'react';
import { View, Text, StyleSheet, Button, ScrollView, TouchableOpacity, Image, Animated, Easing } from 'react-native';
import { API_URL } from '@env';
import Kart from './Kart';

interface Card {
  id: number;
  name: string; // 'title' yerine 'name' olarak güncellenmiştir.
  image: string; // API'den gelen resim yollarını depolamak için string türü kullanıldı.
}

const OyunScreen = ({ navigation }) => {
  const [cardsList, setCardsList] = useState<Card[]>([]);
  const [selectedCards, setSelectedCards] = useState<number[]>([]);
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const shakeAnim = useRef(new Animated.Value(0)).current;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  const shuffleArray = (array: any[] | any[]) => {
    let currentIndex = array.length, randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  };

  /// Dynamically Image Load from local on remote API
  const imageMap: { [key: number]: any } = {
    1: require('../assets/cards/1.png'),
    2: require('../assets/cards/2.png'),
    3: require('../assets/cards/3.png'),
    4: require('../assets/cards/4.png'),
    5: require('../assets/cards/5.png'),
    6: require('../assets/cards/6.png'),
    7: require('../assets/cards/7.png'),
    8: require('../assets/cards/8.png'),
    9: require('../assets/cards/9.png'),
    10: require('../assets/cards/10.png'),
    11: require('../assets/cards/11.png'),
    12: require('../assets/cards/12.png'),
    13: require('../assets/cards/13.png'),
    14: require('../assets/cards/14.png'),
    15: require('../assets/cards/15.png'),
    16: require('../assets/cards/16.png'),
    17: require('../assets/cards/17.png'),
    18: require('../assets/cards/18.png'),
    19: require('../assets/cards/19.png'),
    20: require('../assets/cards/20.png'),
    21: require('../assets/cards/21.png'),
    22: require('../assets/cards/22.png'),
  }

  const getImage = (fileName: string) => {

    const imageId = parseInt(fileName, 10); // string 'fileName'i sayıya çeviriyoruz
      console.log("Image being loaded:", imageId, imageMap[imageId]);
      return imageMap[imageId] || require('../assets/cards/0.png');

  }

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch(`${API_URL}/cards`);
        const data = await response.json();
        // API'den gelen verileri uygun formata dönüştürme
        const formattedCards = data.map((card: any) => ({
          id: card.id,
          title: card.name,
          // image: { uri: `http://localhost:9999/assets/cards/${card.image}`},
          image: getImage(card.image), // Resim yolunu ayarlamak için require kullanılır.
        }));
        setCardsList(shuffleArray(formattedCards));
      } catch (error) {
        console.error("Kartlar okunurken bir hata oluştu:", error);
      }
    };

    fetchCards();
  }, []);

  const selectCard = useCallback((id: number) => {
    if (selectedCards.includes(id)) {
      triggerShake();
      return;
    }

    setSelectedCards(prevSelectedCards => [...prevSelectedCards, id]);

    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 1.2,
        duration: 300,
        useNativeDriver: true,
        easing: Easing.bounce,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();
  }, [selectedCards, scaleAnim]);

  const clearCards = () => {
    setSelectedCards([]);
    setCardsList(shuffleArray(cardsList)); // Burada cardsList'i kullanıyorsunuz, isterseniz API'den yeniden yükleyebilirsiniz.
  };

  const triggerShake = () => {
    Animated.sequence([
      Animated.timing(shakeAnim, { toValue: 1, duration: 100, useNativeDriver: true }),
      Animated.timing(shakeAnim, { toValue: -1, duration: 100, useNativeDriver: true }),
      Animated.timing(shakeAnim, { toValue: 1, duration: 100, useNativeDriver: true }),
      Animated.timing(shakeAnim, { toValue: 0, duration: 100, useNativeDriver: true }),
    ]).start();
  };

  const renderCards = () => {
    return cardsList.map(card => (
      <Kart
        key={card.id}
        title={card.name}
        //frontImage={card.image}
        frontImage={card.image ? { uri: card.image } : require('../assets/cards/0.png')} // Using default?
        onPress={() => selectCard(card.id)}
        disabled={selectedCards.length >= 3 && !selectedCards.includes(card.id)}
        flipped={selectedCards.includes(card.id)}
      />
    ));
  };

  function alert(arg0: string) {
    throw new Error('Function not implemented.');
  }

  return (
    <View style={styles.container}>
      {selectedCards.length > 2 ? (
        <ScrollView style={styles.readyContainer}>
          <View style={styles.cardsWrapper}>
            {selectedCards.map(id => {
              const card = cardsList.find(c => c.id === id);
              return (
                <Animated.View key={id} style={[styles.cardItem, { transform: [{ scale: scaleAnim }] }]}>
                  <Image source={card?.image} style={styles.selectedCardImageLarge} />
                  <Text style={styles.cardTitle}>{card?.name}</Text>
                </Animated.View>
              );
            })}
          </View>
          <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
            <TouchableOpacity onPress={() => { if (selectedCards.length === 3) alert('Falıma Bak!'); }}>
              <Text style={styles.StartTarotButton}>Falıma Bak</Text>
            </TouchableOpacity>
          </Animated.View>
        </ScrollView>
      ) : (
        <ScrollView style={styles.cardsContainer}>
          <View style={styles.cardsWrapper}>{renderCards()}</View>
        </ScrollView>
      )}

      {selectedCards.length < 3 ? (
        <View style={styles.selectedCardsContainer}>
          <View style={styles.selectedContent}>
            {selectedCards.length > 0 ? (
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {selectedCards.map(id => {
                  const card = cardsList.find(c => c.id === id);
                  return (
                    <View key={id} style={styles.cardItem}>
                      <Image source={{ uri: card?.image }} style={styles.selectedCardImage} />
                      <Text style={styles.cardTitle}>{card?.name}</Text>
                    </View>
                  );
                })}
              </ScrollView>
            ) : (
              <Text style={styles.noCardText}>Lütfen Kart Seçin</Text>
            )}
          </View>
          <View style={styles.buttonContainer}>
            <Animated.View style={{ transform: [{ translateX: shakeAnim.interpolate({
              inputRange: [-1, 1],
              outputRange: [-10, 10]
            }) }] }}>
              <TouchableOpacity
                style={[styles.button, styles.clearButton]}
                onPress={clearCards}
                onLongPress={triggerShake}
              >
                <Text style={styles.buttonText}>Kartları Temizle</Text>
              </TouchableOpacity>
            </Animated.View>
          </View>
        </View>
      ) : null}

      <View style={styles.bottomButtonsContainer}>
        <Button title="Ana Ekrana Dön" onPress={() => navigation.navigate('Ev')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#201F47',
    padding: 3,
  },
  selectedCardsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#272c3d',
    padding: 10,
    borderRadius: 8,
    overflow: 'hidden',
  },
  cardsContainer: {
    flex: 1,
    marginBottom: 5,
  },
  readyContainer: {
    marginTop: '45%',
  },
  bottomButtonsContainer: {
    flex: 0,
    margin: 5,
    backgroundColor: '#22215A',
  },
  cardsWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  StartTarotButton: {
    width: '100%',
    backgroundColor: '#6F9940',
    borderRadius: 15,
    padding: 10,
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
  },
  cardItem: {
    width: 100,
    margin: 5,
  },
  selectedCardImageLarge: {
    width: 120,
    height: 180,
    borderRadius: 10,
  },
  selectedCardImage: {
    width: 80,
    height: 120,
    borderRadius: 10,
  },
  cardTitle: {
    textAlign: 'center',
    color: '#fff',
  },
  noCardText: {
    color: '#ffffff',
  },
  buttonContainer: {
    marginTop: 10,
  },
  button: {
    padding: 10,
    borderRadius: 5,
  },
  clearButton: {
    backgroundColor: '#D64B1A',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default OyunScreen;
