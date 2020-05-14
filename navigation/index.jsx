import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from '../screens/Welcome';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import GetStarted from '../screens/GetStarted';
import { UserContext } from '../contexts/User';
import Main from './Main';
import Easy from '../screens/notifications/Easy';
import Complex from '../screens/notifications/Complex';
import Template from '../screens/notifications/Template';

import { easy } from './options';

const Stack = createStackNavigator();

function Navigation() {
  const { isLoggedIn } = React.useContext(UserContext);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoggedIn ? (
          <>
            <Stack.Screen name="HomeStack" component={Main} />
            <Stack.Screen name="Easy" component={Easy} options={easy} />
            <Stack.Screen name="Complex" component={Complex} />
            <Stack.Screen name="Template" component={Template} />
          </>
        ) : (
          <>
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="GetStarted" component={GetStarted} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
