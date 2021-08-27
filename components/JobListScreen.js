import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity, Text } from 'react-native';

import JobCard from './JobCard';
import { jobs } from '../jobs.json';
import JobListFilters from './JobListFilters';

const JobListScreen = ({ navigation }) => {
    const [selectedCampaigns, setSelectedCampaigns] = useState([]);
    const [filteredJobs, setFilteredJobs] = useState(jobs);
    const campaigns = jobs.reduce((uniqueCampaigns, job) => ([...new Set(uniqueCampaigns.concat(job.campaigns))]), []);

    useEffect(() => {
        if (selectedCampaigns.length) {
            const filteredJobs = jobs.filter(job => job.campaigns.some(c => selectedCampaigns.includes(c)));
            setFilteredJobs(filteredJobs);
        }

        else {
            setFilteredJobs(jobs);
        }

    }, [selectedCampaigns]);

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.list}>
                <JobListFilters
                    campaigns={campaigns}
                    selectedCampaigns={selectedCampaigns}
                    setSelectedCampaigns={setSelectedCampaigns}
                />
                {filteredJobs.map(job => (
                    <JobCard key={job.id} job={job} onSelect={() => navigation.navigate('JobDetail', { job })} />
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  list: {
      padding: 20,
  },
});

export default JobListScreen;
