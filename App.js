import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  HomeScreen,
  ResultsScreen,
} from './src/screens';
import { StatusBar } from 'expo-status-bar';

import { topics } from './src/constants/data';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer theme={{ colors: { background: 'white' } }}>
      <StatusBar style="light" />
      <Stack.Navigator>
        <Stack.Screen
          options={{
            title: 'Home',
            headerStyle: {
              backgroundColor: '#25304f',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 20,
            },
            headerTitleAlign: 'center',
          }}
          name="Home"
          component={HomeScreen}
        />

        {topics.map((game) => (
          <Stack.Screen
            name={game.name}
            options={
              (({ route }) => ({ title: route.params.name }),
              {
                headerStyle: {
                  backgroundColor: '#25304f',
                  height: 40,
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize: 15,
                },
                headerTitleAlign: 'center',
              })
            }
            component={game.page}
          />
        ))}

        <Stack.Screen
          options={{
            title: 'Result',
            headerStyle: {
              backgroundColor: '#25304f',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 20,
            },
            headerTitleAlign: 'center',
          }}
          name="Result"
          component={ResultsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
