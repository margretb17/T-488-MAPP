import React from 'react';
import { FlatList, View } from 'react-native';
import { ListItem } from 'react-native-elements';

const RenderAllCinemas = ({ cinemasData, onPress }) => {
	return (
		<View>
			<FlatList
				data={cinemasData}
				renderItem={({ item: { id, name, website }, index }) => (
					<ListItem
						title={name}
						index={index}
						subtitle={website}
						bottomDivider
						chevron
						onPress={() => onPress(id, name)}
					/>
				)}
				keyExtractor={({ id }) => id.toString()}
			/>
		</View>
	);
};

export default RenderAllCinemas;