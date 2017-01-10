import React from 'react';
import {Text, View, Image, Dimensions} from 'react-native';
var width = Dimensions.get('window').width; //full width

const RowFeaturedEvent = ({item}) => {
    const {artist, image} = item;
    const {mainContainer, thumbnail, title, description} = styles;

    return (
        <View style={mainContainer}>

            <Image style={thumbnail}
                   source={{ uri: image }}
            />
            <Text
                style={title}>
                20% discount for tutorials
            </Text>
            <Text style={description}>
                {artist}
            </Text>
        </View>
    );
};

const styles = {
    mainContainer: {
        height: 290,
        width: width,
        alignItems: 'center',
        borderColor: '#ddd',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        borderBottomWidth: 1,
        marginBottom: 15,
        borderTopWidth: 2,
        backgroundColor: 'white'

    },
    thumbnail: {
        width: width,
        height: 220,
        resizeMode: 'stretch',
        marginBottom: 4
    },
    title: {
        textAlign: 'left',
        marginLeft: 12,
        marginRight: 12,
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 2,
        maxWidth: 250,
        color: 'black'
    },
    description: {
        textAlign: 'left',
        marginLeft: 12,
        marginRight: 12,
        fontSize: 14,
        marginTop: 6,
        maxWidth: 250
    }
};

export default RowFeaturedEvent;
