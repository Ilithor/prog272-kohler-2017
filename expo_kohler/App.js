import React from 'react';
import {StyleSheet, Text, Button, View} from 'react-native';
import {NativeRouter, Route, Link} from 'react-router-native';

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Kohler on Prog272 Expo
                </Text>
                <Text>PUT THE ADDRESS COMPONENT JUST BELOW HERE.</Text>
                <Button
                    onPress={this.fetchAddress}
                    title='Get Data'
                    color='#841584'
                    accessibilityLabel='Learn more about this purple button'
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});
