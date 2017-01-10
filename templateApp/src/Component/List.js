import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import axios from 'axios';
import RowEvent from './RowEvent';
import RowPlaces from './RowPlaces';
import RowEventVertical from './RowEventVertical';

class List extends Component {
    state = {albums: []};

    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({albums: response.data}));
    }

    renderAlbums() {
        if(this.props.itemName== 'RowEvent'){
            return this.state.albums.map(album =>
                <RowEvent key={album.title} item={album}/>
            );
        }
        else if (this.props.itemName== 'RowEventVertical'){
            return this.state.albums.map(album =>
                <RowEventVertical key={album.title} item={album}/>
            );
        }
        else if (this.props.itemName== 'RowPlaces'){
            return this.state.albums.map(album =>
                <RowPlaces key={album.title} item={album}/>
            );
        }

    }

    render() {
        if (this.props.orientationMode == 'true') {
            console.log("horizontal scrollview");
            return (
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}
                            style={{backgroundColor: '#FFFDF1'}}>
                    {this.renderAlbums()}
                </ScrollView>
            );
        } else {
            console.log("vertical scrollview");

            return (
                <ScrollView horizontal={false} showsHorizontalScrollIndicator={false}
                            style={{backgroundColor: '#FFFDF1'}}>
                    {this.renderAlbums()}
                </ScrollView>
            );
        }
    }
}

export default List;
