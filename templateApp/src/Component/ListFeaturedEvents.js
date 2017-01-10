import React, {Component} from 'react';
import {Content,List } from 'native-base';
import { Text,View,RefreshControl} from 'react-native';
import axios from 'axios';
import RowFeaturedEvent from './RowFeaturedEvent';

export default class ListFeaturedEvents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: [],
            loaded: false,
            refreshing: false,
        }
    }

    componentWillMount() {
        this.fetchData();
    }

    fetchData() {

        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({dataSource: response.data , loaded:true}));
    }

    _onRefresh() { this.setState({refreshing: true});
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({dataSource: response.data , loaded:true , refreshing : false}));
    }

    render() {

        let items = this.state.dataSource;
            // console.log(this.state.dataSource);

        if (!this.state.loaded) {
            return this.renderLoadingView();
        }

        return (
                <Content  refreshControl={ <RefreshControl refreshing={this.state.refreshing} onRefresh={this._onRefresh.bind(this)} /> }>
                    <List
                           dataArray={items}
                           renderRow={(item) =>
                            <View >
                                <RowFeaturedEvent  item={item}/>
                            </View>
                        }>
                    </List>
                </Content>
        );
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