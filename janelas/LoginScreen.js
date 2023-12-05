import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <View  style={styles.centro}>
      <Text  style={styles.texto} >Usuário</Text>
      <TextInput
        placeholder="Digite aqui"
        value={username}
        onChangeText={(text) => setUsername(text)}
         style={styles.placeholder}
      />

      <Text  style={styles.texto} >Senha</Text>
      <TextInput
        placeholder="Digite aqui"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
         style={styles.placeholder}
      />
      
      <Button style={styles.button}
        title="Confirmar"
        onPress={() => navigation.navigate('Sobre')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  placeholder: {
    justifyContent: 'center',
    backgroundColor: '#ffc0cb',
    padding: 8,
    color: '#d581c0',
  },
  texto: {
    color: '#ff235b',
    fontSize: 15,
    marginBottom: 20,
  },
  centro:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
   },
    button:{
      backgroundColor:'#ff74a3',
      margin:20,
    }

});

export default LoginScreen;
