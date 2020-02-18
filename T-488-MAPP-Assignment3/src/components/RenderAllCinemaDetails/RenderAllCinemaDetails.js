import React from 'react';
import { View, Text, Linking } from 'react-native';

import styles from './styles';

const RenderAllCinemaDetails = ({ name, description, address, city, phone, website }) => {
	return (
		<View>
			<Text style={styles.header}> {name}</Text>
			<View style={styles.textContent}>
				<Text style={styles.textDescription}> {description} </Text>
				<Text style={styles.text}> {address} </Text>
				<Text style={styles.text}> {city} </Text>
				<Text style={styles.text}> S: {phone} </Text>
				<Text style={styles.link} onPress={() => Linking.openURL(`https://${website}`)}> {website} </Text>
			</View>
		</View>
	);
};

export default RenderAllCinemaDetails;