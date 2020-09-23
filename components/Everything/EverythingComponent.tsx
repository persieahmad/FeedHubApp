import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default function EverythingComponent() {
  return (
    <View style={styles.main}>
      <Text>Everything</Text>
    </View>
  );
}
