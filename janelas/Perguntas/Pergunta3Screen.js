import React, { useState } from 'react';
import { View, Text, Button,StyleSheet } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { useQuiz } from '../../QuizContext';

const Pergunta3Screen = ({ navigation }) => {
  const { score, setScore } = useQuiz();
  const [resposta, setResposta] = useState('');

  const opcoesResposta = [
    { label: 'Ciência da computação', value: 'A' },
    { label: 'Engenharia de Software', value: 'B' },
    { label: 'Engenharia de computação', value: 'C' },
    { label: 'Sistemas de informação', value: 'D' },
    { label: 'Análise e desenvolvimento de Sistemas', value: 'E' },
  ];

  const respostaCorreta = 'E'; // Defina a opção correta para a pergunta 1

  const verificarResposta = () => {
    if (resposta === respostaCorreta) {
      setScore(score + 10);
    }
    navigation.navigate('Pergunta4'); // Avance para a próxima pergunta
  };

  return (
    <View>
      <Text style={styles.paragraph}>Pergunta 3: Quantas faculdades ele fez? </Text>
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

export default Pergunta3Screen;
