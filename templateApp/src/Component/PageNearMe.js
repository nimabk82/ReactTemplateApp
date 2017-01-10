import React, {Component} from 'react';
import {Container, Header, Footer, FooterTab, Button, Icon, Fab} from 'native-base';
import {StyleSheet, Text, View, Animated, Alert} from 'react-native';
import List from './List';
import MapView from 'react-native-maps';

class PageNearMe extends Component {


    render() {

        this.state = {
            active: 'true'
        };
        return (
            <Container>
                <Header>
                    <Button transparent>
                        <Icon name='ios-notifications'/>
                    </Button>
                    <Button transparent iconRight>
                        Near Me
                        <Icon name='ios-arrow-forward'/>
                    </Button>
                </Header>

                <View style={styles.containerStyle}>

                    <MapView
                        style={styles.mapStyle}
                        region={{
                            latitude: 37.78825,
                            longitude: -122.4324,
                            latitudeDelta: 0.015,
                            longitudeDelta: 0.0121,}}
                    >
                    </MapView>
                    <View style={styles.topBtnContainerStyle}>
                        <Fab
                            active={this.state.active}
                            containerStyle={{}}
                            style={{ backgroundColor: '#5067FF'  }}
                            position="bottomRight"
                            onPress={() => this.setState({ active: !this.state.active })}
                        >
                            <Icon name="md-share"/>
                        </Fab>
                        <Text style={styles.viewMoreStyle}>View more</Text>

                    </View>
                </View>

                <View style={styles.footerStyle}>
                    <List orientationMode={'true'} itemName={'RowPlaces'}/>
                </View>
            </Container>
        )
    };
}

const styles = StyleSheet.create({
    containerStyle: {
        // ...StyleSheet.absoluteFillObject,
        // height: 400,
        // width: 400,
        flex:1,
        flexDirection: 'column',

        // justifyContent: 'flex-end',
    },
    mapStyle: {
        ...StyleSheet.absoluteFillObject,
        flex: 1
    },
    topBtnContainerStyle: {
        height: 100,
        justifyContent: 'center',
    },
    viewMoreStyle: {
        width: 100, backgroundColor: 'white', padding: 12, borderRadius: 8, marginLeft: 16, fontWeight: 'bold',textAlign:'center'
    },
    footerStyle:{
        borderTopWidth:1 ,
        borderColor:'#ddd'
    }
});

export default PageNearMe;