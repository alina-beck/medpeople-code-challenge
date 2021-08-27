import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const JobDetailSection = ({ title, children }) => (
    <View style={styles.section}>
        <Text style={styles.sectionTitle}>{title}</Text>
        {children}
    </View>
);

const styles = StyleSheet.create({
    section: {
        paddingBottom: 10,
        marginBottom: 10,
        borderBottomColor: 'lightgray',
        borderBottomWidth: 1,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
});

export default JobDetailSection;
