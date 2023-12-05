import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { useQuiz } from '../../QuizContext';

const Pergunta4Screen = ({ navigation }) => {
  const { score, setScore } = useQuiz();
  const [resposta, setResposta] = useState('');

  const opcoesResposta = [
    { label: '1', value: 'A' },
    { label: '2', value: 'B' },
    { label: '3', value: 'C' },
    { label: '4', value: 'D' },
    { label: '5', value: 'E' },
  ];

  const respostaCorreta = 'B'; // Defina a opção correta para a pergunta 1

  const verificarResposta = () => {
    if (resposta === respostaCorreta) {
      setScore(score + 10);
    }
    navigation.navigate('Pergunta5'); // Avance para a próxima pergunta
  };

  return (
    <View>
      <Text style={styles.paragraph}>Pergunta 4: Quantos filhos ele tem?</Text>
      {opcoesResposta.map((opcao) => (
        <View key={opcao.value}>
          <RadioButton.Item
            label={opcao.label}
            value={opcao.value}
            status={resposta === opcao.value ? 'checked' : 'unchecked'}
            onPress={() => setResposta(opcao.value)}
          />
        </View>
      ))}
      <Button
        title="Próxima Pergunta"
        onPress={verificarResposta}
      />
    </View>
  );
};
const styles = StyleSheet.create({
   paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '',
    color: '#d581c0',
    borderRadius: 10,
  },
 }); 
export default Pergunta4Screen;
