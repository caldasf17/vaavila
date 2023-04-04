import React from 'react';
import { StyleSheet, View } from 'react-native';
import Agenda from '../Agenda';
import Cancelar from '../Cancelar';
import Checkin from '../Checkin';

export default function Botoes() {
  return (
    <View>

    <View style={styles.botoes1}>
      <Agenda/> </View>
    
    <View style={styles.botoes2}>
      <Checkin/> </View>
    
    <View style={styles.botoes3}>
      <Cancelar/> </View>

    </View>
  );
}

const styles = StyleSheet.create({
  botoes1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
    bottom: 100,
  },
  botoes2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
    bottom: 200,
  },
  botoes3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
    bottom: 300,
  },
});