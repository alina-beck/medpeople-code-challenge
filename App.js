import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import JobListScreen from './components/JobListScreen';
import JobDetailScreen from './components/JobDetailScreen';

const Stack = createNativeStackNavigator();

const App = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='JobList'>
            <Stack.Screen name='JobList' component={JobListScreen} />
            <Stack.Screen name='JobDetail' component={JobDetailScreen} />
        </Stack.Navigator>
    </NavigationContainer>
);

export default App;
