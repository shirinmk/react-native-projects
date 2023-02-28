import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import DestinationSearchScreen from '../screens/DestinationSearch';
import GuestScreen from '../screens/Guests';

import HomeTabNavigator from './HomeTabNavigator';
import PostScreen from '../screens/PostScreen';
const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={'Home'}
          component={HomeTabNavigator}
          options={{
            headerShown: false,
          }}
        />

        {/* end 0  */}
        <Stack.Screen
          name={'Destination search'}
          component={DestinationSearchScreen}
          options={
            {
              // title: 'search your destination',
            }
          }
        />
        {/* end first stack */}
        <Stack.Screen
          name={'Guest'}
          component={GuestScreen}
          options={{
            title: 'How many guests',
          }}
        />
        {/* end second stack  */}

        <Stack.Screen
          name={'Post'}
          component={PostScreen}
          options={{
            title: 'Accomodation',
          }}
        />
        {/* end second stack  */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
