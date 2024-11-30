import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import AlarmItem from './AlarmItem';

const alarms = [
  { id: '1', time: '06:30', label: 'Morning Alarm' },
  { id: '2', time: '07:00', label: 'Workout Alarm' },
  { id: '3', time: '08:30', label: 'Meeting Reminder' },
];

const AlarmClock = () => {
  return (
    <FlatList
      data={alarms}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <AlarmItem time={item.time} label={item.label} />
      )}
      contentContainerStyle={styles.listContainer}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    margin: 16,
  },
});

export default AlarmClock;
