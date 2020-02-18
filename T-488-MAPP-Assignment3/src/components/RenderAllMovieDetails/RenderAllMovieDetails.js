import React from 'react';
import { View, Text, ImageBackground, Linking, ScrollView } from 'react-native';
import { Rating } from 'react-native-ratings';
import styles from './styles';


const RenderAllMovieDetails = ({ pressedMovieWithShowtime: { title, poster, year, plot, durationMinutes, genres, ratings, showtimes } }) => {
	return (
		<View>
			<Text style={styles.header}> {title} </Text>
			<ImageBackground style={{ width: '100%', height: 250 }} source={{ uri: poster }} />
			<ScrollView style={styles.textContent}>
				<Text> {plot} </Text>
				<View>
					<View style={styles.rating}>
						<Text style={styles.ratingText}> IMDB </Text>
						<Rating
							type='star'
							startingValue={Number(ratings.imdb)}
							ratingColor='#f1c40f'
							ratingBackgroundColor='#c8c7c8'
							ratingCount={10}
							imageSize={10}
							fraction={1}
							style={styles.ratingStars}
						/>
						<Text style={styles.ratingNumbers}> {ratings.imdb} </Text>
					</View>
					<View>
						<Text style={styles.inform}> Lengd      : {durationMinutes} mín</Text>
						<Text style={styles.inform}> Útgáfuár  : {year} </Text>
					</View>
					<View>
						{showtimes.schedule.map((s) => (
							<Text key={s.time}>
								<Text style={styles.info}> Sýningar :  {s.time}  </Text>
								<Text
									style={styles.link}
									onPress={() => { Linking.openURL(s.purchase_url); }}>
									Kaupa miða
								</Text>
							</Text>
						))}
					</View>
					<View>
						<Text style={styles.info}>Tegund myndar: </Text>
						{genres.map((g) => (
							<Text key={g.ID}>
								{g.Name}
							</Text>
						))}
					</View>
				</View>
			</ScrollView>
		</View>
	);
};

export default RenderAllMovieDetails;
