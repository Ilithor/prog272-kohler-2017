/**
 * Created by bcuser on 4/17/17.
 */
import React, {Component} from 'react';
import image from "../images/palpatineelectionposter.jpg";
import '../css/App.css';

class AddressShow extends Component {
    constructor(props) {
        super(props);
        this.quiet = true;
        this.log('SHOW ADDRESS CONSTRUCTOR', this.props.address);
        console.log('ADDRESS PROPS', typeof this.props);

    }

    log(message, message2 = '', message3 = '') {
        if (!this.quiet) {
            const label = this.constructor.name + ': ';
            console.log(label, message, message2, message3);
        }
    }

    render() {
        this.log("SHOW ADDRESS RENDER");
        return (
            <div id="addressShowRender" className="App">
                <p className="App-intro">
                    <img src={image} alt="derp"/>
                </p>
                <p className="App-intro">
                    firstName: {this.props.address.firstName}
                </p>
                <p className="App-intro">
                    lastName: {this.props.address.lastName}
                </p>
                <p className="App-intro">
                    home: {this.props.address.home}
                </p>
                <p className="App-intro">
                    city: {this.props.address.city}
                </p>
                <p className="App-intro">
                    planet: {this.props.address.planet}
                </p>
                <p className="App-intro">
                    sector: {this.props.address.sector}
                </p>
                <button id="setAddress"  onClick={this.props.onAddressChange}>Show Address
                </button>
            </div>
        );
    }
}

export default AddressShow;
