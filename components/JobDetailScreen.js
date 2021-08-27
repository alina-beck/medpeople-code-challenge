import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import JobDetailSection from './JobDetailSection';

const JobDetailScreen = ({ route }) => {
    const { job } = route.params;

    return (
        <View style={styles.container}>
            <ScrollView style={styles.jobDetails}>
                <JobDetailSection title='Available Shifts'>
                    {job.available_shifts.map(shift => (
                        <View key={shift.date} style={styles.contentBlock}>
                            <Text>{`${shift.date} | ${shift.time} | ${shift.number_of_hours} hours | ${shift.type}`}</Text>
                            <Text>{`Total pay: ${shift.hourly_pay_in_eur * shift.number_of_hours} EUR`}</Text>
                        </View>
                    ))}
                </JobDetailSection>
                <JobDetailSection title='About the job'>
                    <Text style={styles.subtitle}>Tasks</Text>
                    <Text style={styles.contentBlock}>{job.tasks}</Text>
                    <Text style={styles.subtitle}>Qualifications</Text>
                    <Text style={styles.contentBlock}>{job.qualifications}</Text>
                </JobDetailSection>
                <JobDetailSection title={`About ${job.employer_name}`}>
                    <Text style={styles.contentBlock}>{job.employer_description}</Text>
                    <View style={styles.contentBlock}>
                        <Text style={styles.subtitle}>Address</Text>
                        <Text>{job.address.street}</Text>
                        <Text>{`${job.address.postal_code} ${job.address.city}`}</Text>
                        <Text>{`${job.distance_in_km} km from your location`}</Text>
                    </View>
                </JobDetailSection>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  jobDetails: {
      padding: 20,
  },
  subtitle: {
    fontWeight: 'bold',
    marginBottom: 6,
  },
  contentBlock: {
      marginBottom: 10,
  },
});

export default JobDetailScreen;
