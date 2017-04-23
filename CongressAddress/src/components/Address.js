/**
 * Created by bcuser on 4/17/17.
 */
import React, {Component} from 'react';
import '../css/App.css';

class Address extends Component {
    constructor(props) {
        super(props);

        console.log('ADDRESS PROPS', typeof this.props);
        const address = this.props.addressList[0];
        this.state = {
            firstName: address.firstName,
            lastName: address.lastName,
            home: address.home,
            city: address.city,
            planet: address.planet,
            sector: address.sector
        }
    }

    setAddress = () => {
        const address = this.props.addressList[1];

        this.setState({
            image: <img src={require("./../images/palpatineelectionposter.jpg")} alt="Emperor Palpatine"/>,
            firstName: address.firstName,
            lastName: address.lastName,
            home: address.home,
            city: address.city,
            planet: address.planet,
            sector: address.sector
        })
    };

    render() {
        return (
            <div className="Address">
                <p className="App-intro">
                    {this.state.image}
                </p>
                <p className="App-intro">
                    firstName: {this.state.firstName}
                </p>
                <p className="App-intro">
                    lastName: {this.state.lastName}
                </p>
                <p className="App-intro">
                    home: {this.state.home}
                </p>
                <p className="App-intro">
                    city: {this.state.city}
                </p>
                <p className="App-intro">
                    planet: {this.state.planet}
                </p>
                <p className="App-intro">
                    sector: {this.state.sector}
                </p>
                <button className="setAddress" onClick={this.setAddress}>Set Address</button>
            </div>
        );
    }
}

export default Address;
