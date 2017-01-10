import React from 'react';
import {Text, View, Image, Linking} from 'react-native';
import {Card, CardItem} from 'native-base';


const RowEvent = ({item}) => {
    const {image} = item;
    const {
        containerStyle,
        imageStyle,
        titleStyle,
        descriptionStyle
    } = styles;

    return (
        <View style={containerStyle}>

            <Image style={imageStyle} source={{ uri: image }}/>
            <View>
                <Text style={titleStyle}>
                    20% discount for tutorials
                </Text>
                <Text style={descriptionStyle}>
                    PluralSight Education University
                </Text>
            </View>

        </View>
    );
};

const styles = {
    containerStyle: {
        flexDirection:'row' , paddingLeft:16, paddingRight:16, paddingTop:12,paddingBottom:12 , backgroundColor:'white' , alignItems:'center'
    },
    imageStyle: {
        width:70 ,height:70 , margin:2 , borderRadius: 4
    },
    titleStyle: {
        textAlign:'left' , marginLeft:12, fontSize:18, fontWeight: 'bold', marginBottom:4 , maxWidth:250
    },
    descriptionStyle: {
        textAlign:'left' , marginLeft:12, fontSize:14 , maxWidth:250
    },
};

export default RowEvent;
