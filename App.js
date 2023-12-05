import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { QuizProvider } from './QuizContext';
import SplashScreen from './janelas/SplashScreen';
import LoginScreen from './janelas/LoginScreen';
import SobreScreen from './janelas/SobreScreen';
import Pergunta1Screen from  './janelas/Perguntas/Pergunta1Screen';
import Pergunta2Screen from './janelas/Perguntas/Pergunta2Screen';
import Pergunta3Screen from './janelas/Perguntas/Pergunta3Screen';
import Pergunta4Screen from './janelas/Perguntas/Pergunta4Screen';
import Pergunta5Screen from './janelas/Perguntas/Pergunta5Screen';
import ResultadoScreen from './janelas/Perguntas/ResultadoScreen';
const Stack = createStackNavigator();

const App = () => {
  return (
    <QuizProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen name="Anselmo" component={SplashScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Sobre" component={SobreScreen} />
          <Stack.Screen name="Pergunta1" component={Pergunta1Screen} />
          <Stack.Screen name="Pergunta2" component={Pergunta2Screen} />
          <Stack.Screen name="Pergunta3" component={Pergunta3Screen} />
          <Stack.Screen name="Pergunta4" component={Pergunta4Screen} />
          <Stack.Screen name="Pergunta5" component={Pergunta5Screen} />
          <Stack.Screen name="Resultado" component={ResultadoScreen} />
          
        </Stack.Navigator>
      </NavigationContainer>
    </QuizProvider>
  );
};

export default App;
