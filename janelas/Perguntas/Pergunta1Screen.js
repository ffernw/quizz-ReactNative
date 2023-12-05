import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { useQuiz } from '../../QuizContext';


const Pergunta1Screen = ({ navigation }) => {
  const { score, setScore } = useQuiz();
  const [resposta, setResposta] = useState('');

  const opcoesResposta = [
    { label: 'Anselmo Paulo Florentino da Silva', value: 'A' },
    { label: ' Anselmo Paulo Florentino', value: 'B' },
    { label: ' Anselmo Paulo de Florentino', value: 'C' },
    { label: 'Anselmo da Silva Florentino', value: 'D' },
    { label: 'Anselmo de Paula Souza', value: 'E' },
  ];

  const respostaCorreta = 'B'; 

  const verificarResposta = () => {
    if (resposta === respostaCorreta) {
      setScore(score + 10);
    }
    navigation.navigate('Pergunta2'); 
  };

  return (
    <View>
      <Text style={styles.paragraph}>Pergunta 1: Caros presentes, poderiam me informar o nome completo do respeitável Professor Anselmo? </Text>
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
  placeholder: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '',
    padding: 8,
    color: '#d581c0',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '',
    color: '#d581c0',
    borderRadius: 10,
  },
input :{
margin: 24,
    fontSize: 15,
    justifyContent: '',
    textAlign: 'eight',
    borderRadius: 5,
},
text: {
  color: '#d581c0',
  fontWeight: 'bold',


  },
});
export default Pergunta1Screen;
