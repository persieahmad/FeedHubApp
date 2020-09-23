import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Header from '../../ui/Header/Header';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default function HeadlinesComponent() {
  return (
    <>
      <Header title="Headlines" />
      <View style={styles.main}>
        <Text>Headlines</Text>
      </View>
    </>
  );
}
