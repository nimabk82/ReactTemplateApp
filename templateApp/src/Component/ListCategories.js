import React, {Component} from 'react';
import {Content} from 'native-base';
import {Text,View} from 'react-native';
import GridView from 'react-native-grid-view';
import axios from 'axios';
import RowCategory from './RowCategory';

let ITEMS_PER_ROW = 2;

export default class ListCategories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: [],
            loaded: false,
        }
    }

    componentWillMount() {
        this.fetchData();
    }

    fetchData() {

        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({dataSource: response.data , loaded:true}));
    }

    render() {

        //    console.log(this.state.dataSource);

        if (!this.state.loaded) {
            return this.renderLoadingView();
        }

        return (

                <Content>
                    <GridView
                    items={this.state.dataSource}
                    itemsPerRow={ITEMS_PER_ROW}
                    renderItem={this.renderItem}
                    enableEmptySections={true}
                    />
                </Content>
        );
    }

    renderItem(item) {
        return <RowCategory key={item.title} item={item}/>
    }


    renderLoadingView() {
        return (
            <View>
                <Text style={styles.loadingStyle}>
                    Loading items...
                </Text>
            </View>
        );
    }

}

const styles ={
    containerStyle : {
        backgroundColor:'#FFFFFF'
    },
    loadingStyle: {
        height:200,
        marginTop:200,
        fontSize : 20,
        textAlign:'center',
        justifyContent : 'center'
    }
};