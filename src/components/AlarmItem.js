import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const AlarmItem = ({ time, label }) => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.alarmItemContainer}>
      <View style={styles.alarmInfo}>
        <Text style={styles.timeText}>{time}</Text>
        <Text style={styles.labelText}>{label}</Text>
      </View>
      <View style={styles.alarmActions}>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
        <MaterialIcons name="keyboard-arrow-right" size={24} color="gray" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  alarmItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  alarmInfo: {
    flex: 1,
  },
  timeText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  labelText: {
    fontSize: 14,
    color: '#888',
  },
  alarmActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default AlarmItem;
