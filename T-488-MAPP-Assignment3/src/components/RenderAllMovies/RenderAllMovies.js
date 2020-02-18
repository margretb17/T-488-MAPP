import React from 'react';
import { FlatList, View, Text } from 'react-native';
import { ListItem } from 'react-native-elements';

const RenderAllMovies = ({ pressedMovies, onPress }) => {
	return (
		<View>
			<FlatList
				data={pressedMovies}
				renderItem={({ item: { id, title, genres, year, poster }, index }) => (
					<ListItem
						title={title}
						index={index}
						rightSubtitle={year}
						subtitle={
							<View>
								{genres.map((g) => (
									<Text key={g.ID}>
										{g.Name}
									</Text>
								))}
							</View>
						}
						leftAvatar={{
							source: { uri: poster },
							size: "large",
							containerStyle: { marginTop: 5 }
						}}
						bottomDivider
						chevron
						onPress={() => onPress(id)}
					/>
				)}
				keyExtractor={({ id }) => id.toString()}
			/>
		</View>
	);
};

export default RenderAllMovies;
