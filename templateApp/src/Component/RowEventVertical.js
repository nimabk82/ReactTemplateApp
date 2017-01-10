import React from 'react';
import {Text, View, Image, Linking} from 'react-native';
import {Card, CardItem} from 'native-base';


const RowEventVertical = ({item}) => {
    const {title, artist, thumbnail_image, image, url} = item;
    const {
        cardStyle,
        descriptionStyle,
        titleStyle,
        imageStyle
    } = styles;

    return (
        <Card style={cardStyle}>

            <Image style={imageStyle}
                   source={{ uri: image }}
            />

            <Text style={titleStyle}>
                20% discount for tutorials
            </Text>
            <Text style={descriptionStyle}>
                PluralSight Education University
            </Text>
        </Card>
    );
};

const styles = {
    cardStyle: {
        height: 250, marginLeft: 16,
        marginRight: 16, borderWidth: 2,
        alignItems: 'center',
        borderRadius: 4,
        borderColor: '#ddd',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
    },
    descriptionStyle: {
        textAlign: 'left',
        marginLeft: 12,
        marginRight: 12,
        fontSize: 14,
        marginTop: 6,
        marginBottom: 10,
        maxWidth: 250
    },
    titleStyle: {
        textAlign: 'left',
        marginLeft: 12,
        marginRight: 12,
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 6,
        marginBottom: 10,
        maxWidth: 250
    },
    imageStyle: {
        width: 250,
        height: 150,
        margin: 2,
        borderRadius: 4
    }
};

export default RowEventVertical;
