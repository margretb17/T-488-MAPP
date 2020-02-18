import React from 'react';
import { ScrollView, Text } from 'react-native';

import styles from './styles';

const RenderAllUpcomingMovieDetails = ({ pressedUpcomingMovie: { title } }) => {
    return (
        <ScrollView>
            <Text style={styles.header}> {title} </Text>
        </ScrollView>
    );
};

export default RenderAllUpcomingMovieDetails;
