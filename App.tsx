// App.tsx

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import EvScreen from './src/components/EvScreen';
import OyunScreen from './src/components/OyunScreen';

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Ev">
        <Stack.Screen name="Ev" component={EvScreen} />
        <Stack.Screen name="Oyun" component={OyunScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;