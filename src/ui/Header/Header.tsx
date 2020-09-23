import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
});

export default function Header({title}: {title: string}) {
  return (
    <View style={styles.main}>
      <Text>{title}</Text>
    </View>
  );
}
