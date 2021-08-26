import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const JobDetailScreen = ({ route }) => {
    const { job } = route.params;

    return (
        <View style={styles.container}>
            <Text>Job Details</Text>
            <Text>{job.employer_name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default JobDetailScreen;
