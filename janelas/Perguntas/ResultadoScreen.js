import React from 'react';
import { View, Text, Button } from 'react-native';
import { useQuiz } from '../../QuizContext';

const ResultadosScreen = ({ navigation }) => {
  const { score } = useQuiz();

  return (
    <View>
      <Text>Nome do Usuário: [Nome]</Text>
      <Text>Pontuação: {score} pontos</Text>
      <Button
        title="Voltar para Sobre"
        onPress={() => navigation.navigate('Sobre')}
      />
    </View>
  );
};

export default ResultadosScreen;
