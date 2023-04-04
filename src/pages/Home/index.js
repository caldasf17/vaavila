import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from '../../components/Header';
import Botoes from '../../components/Botoes';

export default function Home() {
  return (
    <View style={styles.container}>
        <Header name="Alan Caldas"/>
        <Botoes/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4169E1',
    flexDirection: 'column'
  },
});
