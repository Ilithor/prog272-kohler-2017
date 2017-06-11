import React from 'react';
import {StyleSheet, Text, Button, View} from 'react-native';

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Kohler on Prog272 Expo</Text>
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
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
