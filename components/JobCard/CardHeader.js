import React from 'react';
import { StyleSheet, View, Image, ImageBackground, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CardHeader = ({
    backgroundImage,
    logo,
    title,
    subtitle,
    rating,
}) => (
    <ImageBackground
        source={{ uri: backgroundImage }}
        style={styles.background}
    >
        <View style={styles.backgroundFilter} />
        <Image
            source={{ uri: logo }}
            style={styles.logo}
        />
        <View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
        <View style={styles.rating}>
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
        backgroundColor: 'black',
    },
    backgroundFilter: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)',
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
});

export default CardHeader;
