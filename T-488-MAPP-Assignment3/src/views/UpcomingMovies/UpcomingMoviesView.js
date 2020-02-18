import React from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';

import RenderUpcomingMovies from '../../components/RenderUpcomingMovies/RenderUpcomingMovies';

class UpcomingMoviesView extends React.Component {

	static navigationOptions = {
		headerTitle: 'Upcoming Movies',
		headerTitleStyle: {
			fontWeight: 'bold',
			fontSize: 20
		},
	};

	render() {

		const { navigate } = this.props.navigation;

		return (
			<View style={styles.screens}>
				<RenderUpcomingMovies
					upcomingMovieData={this.props.upcomingMovies}
					onPress={(id) => navigate('UpcomingMovieDetailView', { id: id })}
				/>
			</View>
		);
	};
};

const styles = StyleSheet.create({
	screens: {
		flex: 1
	}
});

const mapStateToProps = (reduxStoreState) => {
	return {
		upcomingMovies: reduxStoreState.upComingMovie.sort((a, b) => b.releaseDateIS > a.releaseDateIS)
	};
};

export default connect(mapStateToProps)(UpcomingMoviesView);

