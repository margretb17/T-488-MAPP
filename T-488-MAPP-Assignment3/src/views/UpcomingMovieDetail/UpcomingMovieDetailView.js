import React from 'react';
import { ScrollView, Text, View, StyleSheet, WebView, Platform } from 'react-native';
import { connect } from 'react-redux';

import RenderAllUpcomingMovieDetails from '../../components/RenderAllUpcomingMovieDetails/RenderAllUpcomingMovieDetails';

const upComingMovieDetailView = ({ pressedUpcomingMovie, trailers }) => {

    return (
        <ScrollView>
            <View>
                <RenderAllUpcomingMovieDetails pressedUpcomingMovie={pressedUpcomingMovie} />
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
}

const mapStateToProps = (reduxStoreState, myProps) => {
    const { upComingMovie } = reduxStoreState;
    const { navigation } = myProps;
    const movieIdent = navigation.getParam('id', 0);
    const pressedUpcomingMovie = upComingMovie.find(c => c.id === movieIdent);
    const trailer = pressedUpcomingMovie.trailers.find(trailer => {
        return trailer.results.length > 0;
    });
    return {
        pressedUpcomingMovie,
        trailers: trailer ? trailer.results : null
    }
};
const styles = StyleSheet.create({

    WebViewContainer: {
        marginTop: (Platform.OS == 'android') ? 20 : 0,
    }
});


export default connect(mapStateToProps)(upComingMovieDetailView);