import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import CardHeader from './CardHeader';

const JobCard = ({ job }) => {
    const { available_shifts: shifts } = job;
    const averageHourlyPay = Math.round(shifts.reduce((total, shift) => shift.hourly_pay_in_eur + total, 0) / shifts.length);
    const shiftTypes = shifts.reduce((types, shift) => {
        types.push(shift.type);
        return [...new Set(types)];
    }, []);

    return (
        <View style={styles.card}>
            <CardHeader
                backgroundImage={job.background_image}
                logo={job.logo}
                title={job.employer_name}
                subtitle={job.department}
                rating={job.average_rating}
            />
            <View style={styles.content}>
                <Text>{`${shifts.length} shifts | ${shiftTypes} | average pay: ${averageHourlyPay}/h`}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        marginTop: 20,
        borderRadius: 6,
        overflow: 'hidden',
        elevation: 6,
    },
    content: {
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
});

export default JobCard;
