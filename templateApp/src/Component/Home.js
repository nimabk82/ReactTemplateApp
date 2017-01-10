import React, {Component} from 'react';
import {Button, Icon} from 'native-base';
import {Actions} from 'react-native-router-flux';
import {StyleSheet, Text, Image, View, ScrollView, Animated} from 'react-native';
import myTheme from '../../Themes/myTheme';
import List from './List';
import ViewPagerTest from './ViewPagerTest';


const HEADER_MAX_HEIGHT = 200;
const HEADER_MIN_HEIGHT = 0;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scrollY: new Animated.Value(0),
        };
    }

    onBtnPressNearMe() {
        Actions.nearMe();
    };

    onBtnPressCategories() {
        Actions.categories();
    };

    onBtnPressEvents() {
        Actions.events();
    };

    _renderScrollViewContent() {
        return (
            <View style={styles.scrollViewContentStyle}>
                <View style={styles.scrollViewTopStyle}>
                    <View style={styles.scrollViewButtonsStyle}>
                        <Button iconRight theme={myTheme} style={styles.btnPreviousStyle}
                                onPress={this.onBtnPressNearMe.bind()}>
                            <Text >Near Me</Text>
                            <Icon name='ios-contacts'/>
                        </Button>

                        <Button success iconRight theme={myTheme} style={styles.btnCategoriesStyle}
                                onPress={this.onBtnPressCategories.bind()}>
                            <Text>Categories</Text>
                            <Icon name='ios-contacts'/>
                        </Button>
                    </View>
                </View>

                <View>
                    <View style={styles.scrollViewMiddleStyle}>
                        <Text style={styles.txtShowAllStyle} onPress={this.onBtnPressCategories.bind()}>Show All</Text>
                        <Text style={styles.txtBestEventsStyle} onPress={this.onBtnPressEvents.bind()}>Best Events</Text>
                    </View>
                    <List orientationMode={'true'} itemName={'RowEventVertical'} />
                </View>

                <Image
                    style={styles.bottomAddsStyle}
                    source={require('../Image/event2.png')}>
                </Image>

                <Text style={[styles.bottomButtonsStyle , {borderTopWidth:1}]}>NearBy</Text>
                <Text style={styles.bottomButtonsStyle}>Fast Access</Text>
                <Text style={styles.bottomButtonsStyle}>NearBy</Text>
                <Text style={styles.bottomButtonsStyle}>Fast Access</Text>
            </View>
        );
    }

    render() {

        const headerHeight = this.state.scrollY.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE],
            outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
            extrapolate: 'clamp',
        });
        const imageOpacity = this.state.scrollY.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
            outputRange: [1, 1, 0],
            extrapolate: 'clamp',
        });
        const imageTranslate = this.state.scrollY.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE],
            outputRange: [0, -50],
            extrapolate: 'clamp',
        });

        return (

            <View style={styles.fill}>
                <ScrollView style={styles.fill}
                            scrollEventThrottle={16}
                            onScroll={Animated.event([{nativeEvent: {contentOffset: {y: this.state.scrollY}}}])}>
                    {this._renderScrollViewContent()}
                </ScrollView>
                <Animated.View style={[styles.headerStyle, {height: headerHeight}]}>
                    {/*<Animated.Image*/}
                        {/*style={[styles.backgroundImageStyle,{opacity: imageOpacity, transform: [{translateY: imageTranslate}]},]}*/}
                        {/*source={require('../Image/thumbnail_2.jpg')}*/}
                    {/*/>*/}
                    <ViewPagerTest />
                </Animated.View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    headerStyle: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: '#03A9F4',
        overflow: 'hidden',
    },
    scrollViewContentStyle: {
        marginTop: HEADER_MAX_HEIGHT,
    },
    scrollViewTopStyle: {
        backgroundColor: '#F0F5F2',
        borderBottomColor: '#D9D9D9',
        borderTopColor: '#D9D9D9',
        borderBottomWidth: 1,
        borderTopWidth: 1
    },
    scrollViewButtonsStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 14
    },
    btnPreviousStyle: {
        borderRadius: 4,
        width: 155,
        height: 48,
        paddingLeft: 16,
        paddingRight: 16,
        marginRight: 12
    },
    btnCategoriesStyle: {
        borderRadius: 4,
        width: 155,
        height: 48,
        paddingLeft: 16,
        paddingRight: 16
    },
    scrollViewMiddleStyle: {
        flexDirection: 'row',
        backgroundColor: '#FFFDF1'
    },
    txtShowAllStyle: {
        flex: 1,
        padding: 16,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#A09F97'
    }
    ,
    txtBestEventsStyle: {
        padding: 16,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#E69743'
    },
    bottomAddsStyle: {
        height: 150,
        flex: 1,
        width: null,
        borderRadius: 6,
        margin: 16,
        borderColor: '#ddd',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 2,
    },
    bottomButtonsStyle: {
        borderColor: '#D9D9D9',
        borderBottomWidth: 1,
        padding: 16
    },
    backgroundImageStyle: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        width: null,
        height: HEADER_MAX_HEIGHT,
        resizeMode: 'cover',
    },
});

