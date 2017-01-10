import React from 'react';
import {Text, View, Image} from 'react-native';

const RowPalces = ({item}) => {
    const {title, artist, thumbnail_image, image, url} = item;
    const {
        containerStyle,
        titleStyle,
        imageStyle
    } = styles;

    return (
        <View style={containerStyle}>

            <Image style={imageStyle}
                   source={{ uri: image }}
            />

            <Text style={titleStyle}>
                {title}
            </Text>
        </View>
    );
};

const styles = {
    containerStyle: {
        marginLeft: 16,
        marginRight: 16,
        marginTop:6,
        marginBottom: 6,
        alignItems: 'center',
        borderTopColor:'black',
    },
    titleStyle: {
        textAlign: 'left',
        marginLeft: 12,
        marginRight: 12,
        fontSize: 14,
        fontWeight: 'normal',
        marginTop: 6,

        maxWidth: 250
    },
    imageStyle: {
        width: 90,
        height: 90,
        margin: 2,
        borderRadius: 140,
    }
};

export default RowPalces;
