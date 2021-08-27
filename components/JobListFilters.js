import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

const JobListFilters = ({
    campaigns,
    selectedCampaigns,
    setSelectedCampaigns,
}) => {
    const selectCampaign = campaign => {
        if (selectedCampaigns.includes(campaign)) {
            const newCampaigns = [...selectedCampaigns];
            const campaignIndex = newCampaigns.findIndex(c => c === campaign);
            newCampaigns.splice(campaignIndex, 1);
            setSelectedCampaigns(newCampaigns);
        }

        else {
            setSelectedCampaigns([...selectedCampaigns, campaign]);
        }
    }

    return (
        <View style={styles.filters}>
            {campaigns.map(campaign => {
                const isSelected = selectedCampaigns.includes(campaign);

                return (
                    <TouchableOpacity
                        key={campaign}
                        style={{
                            ...styles.filterButton,
                            backgroundColor: isSelected ? 'teal' : 'white',
                        }}
                        onPress={() => selectCampaign(campaign)}
                    >
                        <Text style={{ ...styles.buttonText, color: isSelected ? 'white' : 'teal' }}>{campaign}</Text>
                    </TouchableOpacity>
                );
                })}
        </View>
    );
};

const styles = StyleSheet.create({
  filters: {
      flexDirection: 'row',
  },
  filterButton: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: 'teal',
      borderWidth: 2,
      padding: 5,
      marginRight: 5,
      marginBottom: 5,
  },
  buttonText: {
      flexShrink: 1,
      textAlign: 'center',
  },
});

export default JobListFilters;
