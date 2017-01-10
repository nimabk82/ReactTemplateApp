'use strict';

import React , {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Dimensions,
    Image,
} from 'react-native';
import axios from 'axios';

import ViewPager from 'react-native-viewpager';
//var ViewPager = require('./ViewPager');
var deviceWidth = Dimensions.get('window').width;

var IMGS = [
    "https://images-na.ssl-images-amazon.com/images/I/61McsadO1OL.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/51qmhXWZBxL.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/51vlGuX7%2BFL.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/41j7-7yboXL.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/717DWgRftmL._SX522_.jpg",
];


export default class ViewPagerTest extends Component{
    constructor(props) {
        super(props);
        const ds = new ViewPager.DataSource({pageHasChanged: (p1, p2) => p1 !== p2,});
        this.state = {
            dataSource: ds.cloneWithPages(IMGS)
        };
    }

    render() {
        return (
                <ViewPager
                    dataSource={this.state.dataSource}
                    renderPage={this._renderPage}
                    isLoop={true}
                    autoPlay={true}/>
        );
    }


    _renderPage(
        data: Object,
        pageID: number | string,) {
        return (
            <Image
                source={{uri: data}}
                style={styles.page} />
        );
    }
}

const styles ={
    page: {
        width: deviceWidth,
        height:300
    },
};