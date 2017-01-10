import React from 'react';
import {Text, View, Image, Linking,Dimensions} from 'react-native';
import {CardItem,Icon} from 'native-base';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

const RowCategory = ({item}) => {
    const {title, artist, thumbnail_image, image, url} = item;
    const {
        categoryContentStyle,
        backdropViewStyle,
        headlineStyle,
        thumbnailStyle,
        cardItemStyle,
        cardSectionStyle,
        iconStyle
    } = styles;

    return (

        // {/*<View style={category} >*/}
        // {/*<Image style={thumbnailStyle} source={{ uri: image}}>*/}
        // {/*<View style={backdropViewStyle}>*/}
        // {/*<Text style={headlineStyle} numberOfLines={13}>{title}</Text>*/}
        // {/*</View>*/}
        // {/*</Image>*/}
        // {/*</View>*/}

    <View style={categoryContentStyle} >
        <CardItem style={cardItemStyle}>
            <View style={cardSectionStyle}>
                <Icon name='ios-contacts' style={iconStyle}/>
                <Text style={headlineStyle} numberOfLines={1}>{title}</Text>
            </View>
        </CardItem>
    </View>
    );
};

const styles = {

    thumbnailStyle: {
        width: width/2,
        height:height/3,
        alignSelf: 'stretch',

    },
    categoryContentStyle: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
    },
    cardItemStyle:{
        borderColor:'#ddd',
        borderRightWidth:1
    },
    cardSectionStyle :{
        height:150,
        alignItems:'center',
        justifyContent: 'center',
        width:150
    },
    iconStyle :{
        fontSize: 35, color: '#853AB2',marginBottom:10
    },
    backdropViewStyle: {
        height: width/2,
        width: height/3,
        backgroundColor: 'rgba(0,0,0,0)',
    },
    headlineStyle: {
        fontSize: 16,
        textAlign: 'center',
        backgroundColor: 'rgba(0,0,0,0)',
        color: '#4D4D4D'
    }
};

export default RowCategory;
