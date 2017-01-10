import React, {Component} from 'react';
import {StatusBar} from 'react-native';
import Main from './Component/Main';
import Categories from './Component/ListCategories';
import EventsPage from './Component/PageEvents';
import ListFeaturedEvents from './Component/ListFeaturedEvents';
import ListBestEvents from './Component/List';
import PageSearch from './Component/PageSearch';
import RowEvent from './Component/RowEvent';
import Drawer from 'react-native-drawer';
import MyControlPanel from './ControlPanel';
import Router from './Router';

export default class App extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            drawerType: 'overlay',
            openDrawerOffset: 100,
            closedDrawerOffset: 0,
            panOpenMask: .1,
            panCloseMask: .9,
            relativeDrag: false,
            panThreshold: .25,
            tweenHandlerOn: false,
            tweenDuration: 350,
            tweenEasing: 'easeOutQuart',
            disabled: false,
            tweenHandlerPreset: null,
            acceptDoubleTap: false,
            acceptTap: true,
            acceptPan: true,
            tapToClose: false,
            negotiatePan: false,
            rightSide: false,
        };
    }

    render() {
        var controlPanel = <MyControlPanel closeDrawer={() => {
      this.drawer.close();
    }}/>
        return (
            <Drawer
                ref={c => this.drawer = c}
                type={this.state.drawerType}
                animation={this.state.animation}
                openDrawerOffset={this.state.openDrawerOffset}
                closedDrawerOffset={this.state.closedDrawerOffset}
                panOpenMask={this.state.panOpenMask}
                panCloseMask={this.state.panCloseMask}
                relativeDrag={this.state.relativeDrag}
                panThreshold={this.state.panThreshold}
                content={controlPanel}
                styles={drawerStyles}
                disabled={this.state.disabled}
                tweenDuration={this.state.tweenDuration}
                tweenEasing={this.state.tweenEasing}
                acceptDoubleTap={this.state.acceptDoubleTap}
                acceptTap={this.state.acceptTap}
                acceptPan={this.state.acceptPan}
                tapToClose={this.state.tapToClose}
                negotiatePan={this.state.negotiatePan}
                changeVal={this.state.changeVal}
                side={this.state.rightSide ? 'right' : 'left'}
            >
                <StatusBar
                    barStyle="default"
                />
                {/*<Main />*/}
                {/*<ViewPagers />*/}
                <Router/>
            </Drawer>
        );
    }
}

const drawerStyles = {
    drawer: {
        shadowColor: "#000000",
        shadowOpacity: 0.8,
        shadowRadius: 0,
    }
};
