/**
 * Created by bcuser on 6/11/17.
 */
import React, {Component} from 'react';
import {
    Alert,
    Button,
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class Address extends Component {
    constructor(props) {
        super(props);
        this.state = {
            foo: 'expo try state',
            firstName: 'default firstName',
            lastName: 'default lastName'
        };
        // NOT USED NOW, BUT YOU MIGHT FIND IT HANDY LATER
        this.collection = [];
        this.fetchAddress = this.fetchAddress.bind(this);
    }

    fetchAddress(event) {
        this.setState({foo: 'fetcher king'});
        const that = this;
        const ip = '168.156.47.60';
        fetch('http://' + ip + ':30025/all-data')
            .then((response) => response.json())
            .then(function(result) {
                this.collection = result.allData;
                that.setState({
                    foo: 'qux success',
                    firstName: this.state.firstName,
                    lastName: this.state.lastName
                });
            }).catch(function(ex) {
            that.setState({foo: 'qux error'});
        });
        if (event) {
            event.preventDefault();
        }
    };

    render() {
        console.log('tst');

        return (
            <View>
                <Text style={styles.instructions}>
                    {this.state.foo}
                </Text>
                {this.state.firstName}
                {this.state.lastName}
                <Button
                    onPress={this.fetchAddress}
                    title="Get Data"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

AppRegistry.registerComponent('Address', () => Address);