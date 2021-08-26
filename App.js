import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import JobListScreen from './components/JobListScreen';
import JobDetailScreen from './components/JobDetailScreen';
import JobHeader from './components/JobHeader';

const Stack = createNativeStackNavigator();

const App = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='JobList'>
            <Stack.Screen
                name='JobList'
                component={JobListScreen}
            />
            <Stack.Screen
                name='JobDetail'
                component={JobDetailScreen}
                options={({ navigation, route }) => ({
                    headerTitle: () => (
                        <JobHeader
                            backgroundImage={route.params.job.background_image}
                            logo={route.params.job.logo}
                            title={route.params.job.employer_name}
                            subtitle={route.params.job.department}
                            rating={route.params.job.average_rating}
                            detail
                            onBack={() => navigation.navigate('JobList')}
                        />
                    ),
                    headerBackVisible: false,
                })}
            />
        </Stack.Navigator>
    </NavigationContainer>
);

export default App;
