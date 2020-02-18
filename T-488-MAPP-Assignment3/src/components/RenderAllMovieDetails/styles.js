import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	header: {
		height: 34,
		fontSize: 24,
		color: "#0B3954",
		fontWeight: "600",
		alignSelf: 'center',
		justifyContent: 'center'
	},
	info: {
		fontWeight: 'bold',
		paddingTop: 5
	},
	inform: {
		fontWeight: 'bold'
	},
	rating: {
		flexDirection: "row"
	},
	ratingText: {
		textAlign: 'left',
		fontWeight: 'bold'
	},
	ratingNumbers: {
		color: "#696969",
		fontSize: 12,
		fontWeight: '100',
		paddingTop: 2
	},
	ratingStars: {
		paddingVertical: 5
	},
	textContent: {
		paddingLeft: 10,
		paddingRight: 10,
		paddingTop: 5,
		paddingBottom: 5,
		fontWeight: 'bold'
	},
	link: {
		fontSize: 15,
		color: '#E91E63',
		textAlign: 'left',
		textDecorationLine: 'underline'
	}
});