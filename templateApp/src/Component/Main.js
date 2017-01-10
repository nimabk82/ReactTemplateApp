import React, {Component} from 'react';
import {Container, Header, Footer, FooterTab, Button, Icon} from 'native-base';
import {StyleSheet, Text, View, Animated, Alert} from 'react-native';
import myTheme from '../../Themes/myTheme';
import Home from './Home';
import ListCategories from './ListCategories';
import {Actions} from 'react-native-router-flux';
import renderIf from '../renderIf';
import PageEvents from './PageEvents';
import PageSearch from './PageSearch';
import Profile from './Profile';


export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scrollY: new Animated.Value(0),
        };
        this.onBtnPressProfile = this.onBtnPressProfile.bind(this);
    }


    onBtnPressHome() {
        Actions.home();
    };

    onBtnPressCategories() {
        Actions.categories();
    };

    onBtnPressEvents() {
        Actions.events();
    };

    onBtnPressProfile() {
        Actions.profile();

    };

    onBtnPressSearch() {
        Actions.searchPage();
    };


    render() {
        return (
            <Container style={styles.containerStyle}>
                <Header>
                    <Button transparent>
                        <Icon name={this.props.iconName }/>
                    </Button>
                    <Button transparent  >
                        Company
                        <Icon name={this.props.iconName}/>
                    </Button>
                </Header>

                <View style={styles.fill}>
                    {renderIf(this.props.page == 2,
                        <Home />
                    )}
                    {renderIf(this.props.page == 3,
                        <ListCategories />
                    )}
                    {renderIf(this.props.page == 4,
                        <PageEvents/>
                    )}
                    {renderIf(this.props.page == 5,
                        <PageSearch />
                    )}
                    {renderIf(this.props.page == 6,
                        <Profile/>
                    )}

                </View>
                <Footer theme={myTheme}>
                    <FooterTab>
                        <Button transparent onPress={this.onBtnPressHome.bind()}>
                            <Icon name='ios-apps'/>
                            <Text >Home</Text>
                        </Button>
                        <Button transparent onPress={this.onBtnPressCategories.bind()}>
                            <Icon name='ios-camera'/>
                            <Text>Categories</Text>
                        </Button>
                        <Button transparent onPress={this.onBtnPressSearch.bind()}>
                            <Icon name='ios-search'/>
                        </Button>
                        <Button transparent onPress={this.onBtnPressEvents.bind()}>
                            <Icon name='ios-contacts'/>
                            <Text>Events</Text>
                        </Button>
                        <Button transparent onPress={this.onBtnPressProfile.bind()}>
                            <Icon name='ios-contacts'/>
                            <Text>Profile</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}


const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: '#FFFFFF'
    },
    fill: {
        flex: 1,
    },
});
