import React from 'react';
import { View, StyleSheet } from 'react-native';
import AlarmScreen from './src/screens/AlarmScreen';

const App = () => {
  return (
    <View style={styles.appContainer}>
      <AlarmScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
});

export default App;
