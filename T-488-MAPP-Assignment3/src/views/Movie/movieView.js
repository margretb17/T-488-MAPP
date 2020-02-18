import React from 'react';
import { ScrollView, Text, View, StyleSheet, WebView, Platform } from 'react-native';
import { connect } from 'react-redux';

import RenderAllMovieDetails from '../../components/RenderAllMovieDetails/RenderAllMovieDetails';

const movieView = ({ pressedMovieWithShowtime, trailers }) => {

	return (
		<ScrollView>
			<View>
				<RenderAllMovieDetails pressedMovieWithShowtime={pressedMovieWithShowtime}
					trailers={trailers} />
			</View>
			{
				!trailers
					?
					<Text> No trailer available for this movie </Text>
					:
					<>
						< View style={{ height: Number(trailers.length * 275), }}>
							{
								trailers.map(t =>
									<WebView
										key={t.id}
										style={styles.WebViewContainer}
										useWebKit={true}
										javaScriptEnabled={true}
										domStorageEnabled={true}
										source={{ uri: t.url }}
									/>)
							}
						</View>
					</>
			}
		</ScrollView>
	)
};

const mapStateToProps = (reduxStoreState, myProps) => {
	const { movie } = reduxStoreState;
	const { navigation } = myProps;
	const movieIdent = navigation.getParam('id', 0);
	const cinemaIdent = navigation.getParam('cinemaId', 0);
	const pressedMovie = movie.find(c => c.id === movieIdent);
	const showtimes = pressedMovie.showtimes.find(s => s.cinema.id === cinemaIdent);
	const pressedMovieWithShowtime = { ...pressedMovie, showtimes }
	const trailer = pressedMovie.trailers.find(trailer => {
		return trailer.results.length > 0;
	});

	return {
		pressedMovieWithShowtime,
		trailers: trailer ? trailer.results : null,
	};
};
const styles = StyleSheet.create({

	WebViewContainer: {
		marginTop: (Platform.OS == 'android') ? 20 : 0,
	}
});


export default connect(mapStateToProps)(movieView);