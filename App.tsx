import React from 'react';
import codePush from 'react-native-code-push';
import TabNavigation from './src/navigation/TabNavigation/TabNavigation';

const App = () => {
  return <TabNavigation />;
};

const codePushOptions = {checkFrequency: codePush.CheckFrequency.ON_APP_RESUME};
export default codePush(codePushOptions)(App);

// icon color #0020ff
