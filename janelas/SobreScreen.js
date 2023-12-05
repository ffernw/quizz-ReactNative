import React from 'react';
import { View, Text, Button,StyleSheet } from 'react-native';

const SobreScreen = ({ navigation }) => {
  return (
    <View style={styles.bloco}>
      <Text style={styles.titulo}>Bem vindo!!!</Text>
      <Text style={styles.paragrafo}>Esse quiz de 5 perguntas é inteiramente dedicado a um dos melhores professores da ETEC de Santa Isabel. Bom divertimento!!! </Text>
      <Button style={styles.botao}
        title="Confirmar"
        onPress={() => navigation.navigate('Pergunta1')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  paragrafo: {
    justifyContent: 'justify',
    padding: 8,
    color: '#d581c0',
    alignItems:'center',
  },
  titulo: {
    color: '#bf003f',
    fontSize: 15,
    marginBottom: 20,
  },
  bloco:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    margin:6,
    backgroundColor: '#fff',
   },
    botao:{
      backgroundColor:'#ff74a3',
      margin:20,
    }

});

export default SobreScreen;
