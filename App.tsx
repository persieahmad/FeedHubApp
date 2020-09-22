import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView, View, Text} from 'react-native';
import codePush from 'react-native-code-push';

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
  },
});

const App = () => {
  return (
    <>
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View style={styles.view}>
            <Text>Welcome to FeedHub!</Text>
            <Text>First Code Push Release</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const codePushOptions = {checkFrequency: codePush.CheckFrequency.ON_APP_RESUME};
export default codePush(codePushOptions)(App);
