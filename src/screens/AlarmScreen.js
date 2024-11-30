import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AlarmClock from '../components/AlarmClock';

const AlarmScreen = () => {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.screenTitle}>Alarms</Text>
      <AlarmClock />
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  screenTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 16,
  },
});

export default AlarmScreen;
