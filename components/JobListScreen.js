import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

import JobCard from './JobCard';
import { jobs } from '../jobs.json';

const JobListScreen = ({ navigation }) => (
    <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.list}>
            {jobs.map(job => (
                <JobCard key={job.id} job={job} onSelect={() => navigation.navigate('JobDetail', { job })} />
            ))}
        </ScrollView>
    </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  list: {
      padding: 20,
  }
});

export default JobListScreen;
