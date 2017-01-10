import React, {Component} from 'react';
import {Picker, Button} from 'native-base';
import {
    View,
    Text,
    Image,
    Alert,
    StyleSheet,
    PixelRatio
} from 'react-native';

export default class ControlPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedItem: undefined,
            selected1: 'key0',
            results: {
                items: []
            }
        }
    }

    onValueChange(value: string) {
        this.setState({
            selected1: value
        });
    }

    onButtonPress() {
        Alert.alert('Button has been pressed!');
    }


    render() {
        return (
            <View style={styles.controlPanel}>
                <View style={styles.controlPanelRow}>
                    <Picker style={styles.picker}
                            iosHeader="Select one"
                            mode="dropdown"
                            selectedValue={this.state.selected1}
                            onValueChange={this.onValueChange.bind(this)}>
                        <Picker.Item label="Home" value="key0"/>
                        <Picker.Item label="Direct messages" value="key1"/>
                        <Picker.Item label="Starred items" value="key2"/>
                    </Picker>
                    <Image style={styles.icon}
                           source={require('./Image/ic_add_circle_outline_white_48dp.png')}/>
                </View>
                <View >
                    <Text style={styles.controlPanelWelcome}>
                        Control Panel
                    </Text>

                    {/*<Button onPress={() => {*/}
                    {/*this.props.closeDrawer();*/}
                    {/*}}>dasda</Button>*/}
                </View>

            </View>
        )
    }
}
const styles = StyleSheet.create({
    controlPanel: {
        flex: 1,
        backgroundColor: '#4279F7',
    },
    controlPanelRow: {
        flex: 0,
        flexDirection: 'row'
    },
    controlPanelText: {
        color: 'white'
    },
    controlPanelWelcome: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 85,
        color: 'white',
        fontWeight: 'bold',
    },
    picker: {
        color: '#d6d7da',
        borderRadius: 0,
        borderWidth: 0,
        padding: 8,
        borderBottomWidth: 1 / PixelRatio.get(),
        borderTopWidth: 1 / PixelRatio.get(),
        borderColor: '#d6d7da',
        width: 190,
        margin: 8,
    },
    icon: {
        width: 40,
        height: 40,
        margin: 8,
        padding: 8
    }
});
