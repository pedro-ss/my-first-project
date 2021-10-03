import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Olá meu nome é Pedro</Text>
      <StatusBar style="auto" />
      <Button
        title="Click me"
        color="#841584"
        accessibilityLabel="Se chegou aqui, procurou ler meu código."
        onPress={() => Alert.alert('Sou aluno de ADS do IFPE')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
