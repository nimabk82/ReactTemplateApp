import React, {Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import ListCategories from './ListCategories';
import Search from './Search';
import List from './List';

export default class PageSearch extends Component {

    render() {
        return (
            <View style={styles.mainContentStyle}>
                <View style={styles.searchContentStyle}>
                    <Search placeholder={'search'} icon={'ios-search'}/>
                    <Search placeholder={'search near me'} icon={'ios-search'}/>
                </View>
                <Text style={styles.lastVisitsStyle}>
                    Last visits
                </Text>
                <List orientationMode={'false'} itemName={'RowEvent'} />
            </View>
        );
    }
}

const styles = StyleSheet.create({

    mainContentStyle:{
        flex:1 ,
    },
    searchContentStyle:{
        marginBottom:8
    },
    lastVisitsStyle: {
        paddingTop:8,
        paddingBottom:8,
        paddingLeft:16,
        paddingRight:16,
        fontWeight:'bold' ,
        backgroundColor:'#E6E6E6',
        color:'#505050',
        textAlignVertical: 'center'
    }
});