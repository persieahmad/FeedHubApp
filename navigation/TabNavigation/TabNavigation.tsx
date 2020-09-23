import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Headlines from '../../screens/Headlines/Headlines';
import Everything from '../../screens/Everything/Everything';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Top Headlines"
        tabBarOptions={{
          keyboardHidesTabBar: true,
          labelStyle: {
            fontSize: 16,
            marginBottom: 4,
            padding: 0,
          },
          style: {
            height: 60,
            backgroundColor: 'white',
          },
        }}
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName: string;

            if (route.name === 'Top Headlines') {
              iconName = 'fire';
            } else if (route.name === 'Everything') {
              iconName = 'globe';
            }

            // You can return any component that you like here!
            return <FontAwesome5 name={iconName} size={size} color={color} />;
          },
        })}>
        <Tab.Screen name="Top Headlines" component={Headlines} />
        <Tab.Screen name="Everything" component={Everything} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
