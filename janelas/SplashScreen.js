import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';

const SplashScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../imagem/splash.png')} 
      style={styles.container}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Quiz Anselmo</Text>
        
        <Button
          title="Entrar"
          onPress={() => navigation.navigate('Login')}
          color="#FF0000" 
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    color: 'white',
    marginBottom: 20,
  },
});

export default SplashScreen;
