import React from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';

import { getCinemas } from '../../actions/cinemaActions';
import { getMovies } from '../../actions/movieAction';
import { getUpcomingMovies } from '../../actions/upcomingMovieAction';
import RenderAllCinemas from '../../components/RenderAllCinemas/RenderAllCinemas';

class CinemasView extends React.Component {

	static navigationOptions = {
		headerTitle: 'Cinemas',
		headerTitleStyle: {
			fontWeight: 'bold',
			fontSize: 20
		},
	};

	componentDidMount() {
		this.props.getCinemas();
		this.props.getMovies();
		this.props.getUpcomingMovies();
	};

	render() {

		const { navigate } = this.props.navigation;
		
		return (
			<View style={styles.screens}>
				<RenderAllCinemas
					cinemasData={this.props.cinemas}
					onPress={(id, title) => navigate('CinemasDetailView', { id: id, title })}
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
		cinemas: reduxStoreState.cinema.sort((a, b) => a.name.localeCompare(b.name, 'is'))
	};
};

export default connect(mapStateToProps, { getCinemas, getMovies, getUpcomingMovies })(CinemasView);