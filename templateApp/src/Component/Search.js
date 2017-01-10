import React, {Component} from 'react';
import {InputGroup, Input, Icon } from 'native-base';
import {View} from 'react-native';
export default class Search extends Component {

    render() {
        const {containerStyle,inputGroupStyle} = styles;

        return (
            <View style={containerStyle}>
            <InputGroup borderType="regular" style={inputGroupStyle} >
                <Icon name={this.props.icon} />
                <Input placeholder= {this.props.placeholder} placeholderTextColor="#999999"  />
                <Icon name="ios-close" />
            </InputGroup>
            </View>
        );
    }
}

const styles = {
    containerStyle: {
        marginRight: 16,
        marginLeft: 16,
        marginTop: 12,
        height:38,

    },
    inputGroupStyle: {
        backgroundColor:'white',
        borderRadius:4,

    },
};