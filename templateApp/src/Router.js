import React from 'react';
import {Scene, Router}  from 'react-native-router-flux';
import Main from './Component/Main';
import PageNearMe from './Component/PageNearMe';

const RouterComponent = () => {
    return (
        <Router hideNavBar={true}>
            <Scene key="main" component={Main} page={'2'} initial iconName={'ios-notifications'} />
            <Scene key="home" component={Main} page={'2'} />
            <Scene key="categories" component={Main} page={'3'} />
            <Scene key="events" component={Main} page={'4'} iconName={''}/>
            <Scene key="searchPage" component={Main} page={'5'}/>
            <Scene key="profile" component={Main} page={'6'}/>
            <Scene key="nearMe" component={PageNearMe} />
        </Router>
    );
};

export default  RouterComponent;