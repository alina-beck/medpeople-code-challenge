import React from 'react';
import { StyleSheet, View, Image, ImageBackground, Text } from 'react-native';
import { HeaderBackButton } from '@react-navigation/elements';
import { Ionicons } from '@expo/vector-icons';

const JobHeader = ({
    backgroundImage,
    logo,
    title,
    subtitle,
    rating,
    detail,
    onBack,
}) => (
    <ImageBackground
        source={{ uri: backgroundImage }}
        style={detail ? styles.screenBackground : styles.background}
    >
        <View style={styles.backgroundFilter} />
        {detail && <HeaderBackButton tintColor='white' style={styles.backButton} onPress={onBack} />}
        <Image
            source={{ uri: logo }}
            style={styles.logo}
        />
        <View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
        <View style={detail ? styles.ratingRow : styles.rating}>
            {Array.from(Array(rating)).map((_, i) => <Ionicons key={i} name='star-outline' size={15} color='orange' />)}
        </View>
    </ImageBackground>
);

const styles = StyleSheet.create({
    background: {
        height: 80,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    screenBackground: {
        height: 200,
        width: '100%',
        transform: [{ translateX: -16 }],
        flexDirection: 'row',
        alignItems: 'flex-end',
        alignContent: 'flex-end',
        flexWrap: 'wrap',
    },
    backgroundFilter: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    backButton: {
        position: 'absolute',
        top: 15,
        left: 5,
    },
    logo: {
        height: 40,
        width: 40,
        borderRadius: 100,
        marginHorizontal: 10,
    },
    title: {
        fontSize: 18,
        color: 'white',
    },
    subtitle: {
        color: 'white',
    },
    rating: {
        alignSelf: 'flex-start',
        flexDirection: 'row',
        margin: 10,
        marginLeft: 'auto',
    },
    ratingRow: {
        flexDirection: 'row',
        width: '100%',
        marginVertical: 10,
        marginLeft: 60,
    }
});

export default JobHeader;
