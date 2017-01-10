import React, {Component} from 'react';
import {View, Dimensions} from 'react-native';
import axios from 'axios';
import List from './List'
import ListFeaturedEvents from './ListFeaturedEvents'
import {TabViewAnimated, TabBarTop} from 'react-native-tab-view';

const initialLayout = {
    height: 0,
    width: Dimensions.get('window').width
};

export default class PageEvents extends Component {

    state = {
        index: 0,
        routes: [
            {key: '1', title: 'Featured'},
            {key: '2', title: 'News'},
            {key: '3', title: 'Favorites'},
        ],
    };

    componentWillMount() {
        this.fetchData();
    };

    fetchData() {

        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({dataSource: response.data, loaded: true}));
    };

    _handleChangeTab = (index) => {
        this.setState({index});
    };

    _renderHeader = (props) => {
        return <TabBarTop {...props} />;
    };

    _renderScene = ({route}) => {
        switch (route.key) {
            case '1':
                return <ListFeaturedEvents />;
            case '2':
                return <ListFeaturedEvents />;
            case '3':
                return <List orientationMode={'false'} itemName={'RowEvent'} />;
            default:
                return null;
        }
    };

    render() {
        return (
            <View style={styles.containerStyle}>
                <TabViewAnimated
                    style={styles.containerStyle}
                    navigationState={this.state}
                    renderScene={this._renderScene}
                    renderHeader={this._renderHeader}
                    onRequestChangeTab={this._handleChangeTab}
                    initialLayout={this.initialLayout}
                />
            </View>
        );
    }

    _renderHeader = (props) => {
        return <TabBarTop {...props} />;
    };
}

const styles = {

    containerStyle: {
        flex: 1,
    },
    page: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    loadingStyle: {
        height: 200,
        marginTop: 200,
        fontSize: 20,
        textAlign: 'center',
        justifyContent: 'center'
    },
};