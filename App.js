import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import JobCard from './components/JobCard';

import { jobs } from './jobs.json';

export default function App() {
  return (
    <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.list}>
            {jobs.map(job => (
                <JobCard key={job.id} job={job} />
            ))}
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  list: {
      padding: 20,
  }
});
