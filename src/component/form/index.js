import React from 'react';
import { render } from 'react-dom';
import MGMInputText from './MGMInputText/index';
import MGMInputEmail from './MGMInputEmail/index';
import MGMInputPassword from './MGMInputPassword/index';
import MGMInputNumber from './MGMInputNumber/index';
import MGMDropdown from './MGMDropdown/index';
export default class MainForm extends React.Component {

    constructor(props) {
        super(props);
        this.stateObj = {"CA":[{"AB":"Alberta"},{"BC":"BritishColumbia"},{"MB":"Manitoba"},{"NB":"NewBrunswick"}],"US":[{"AL":"Alabama"},{"AK":"Alaska"},{"AZ":"Arizona"},{"AR":"Arkansas"},{"CA":"California"}]};
    }

    MGMInputValidate() {
        this.refs.customerName.validate();
        this.refs.customerEmail.validate();
        this.refs.customerPassword.validate();
        this.refs.customerRePassword.validate();
        this.refs.customerNumber.validate();
        this.refs.selectState.validate();
    }

    render() {
        return <div>
            <MGMInputText
                label="Name"
                id="sign-up-name"
                classNames="sign-up-name"
                name="customerName"
                minLength={5}
                placeHolder="Name"
                ref="customerName"
                maxLength={10}
                required
                validations={{ "required": "this is required", "minLength": "please provide more then 5 char" }}
            ></MGMInputText>
            <MGMInputEmail
                label="Email"
                id="sign-up-email"
                classNames="sign-up-email"
                name="customerEmail"
                placeHolder="Email"
                ref="customerEmail"
            ></MGMInputEmail>
            <MGMInputPassword
                label="Password"
                id="sign-up-password"
                classNames="sign-up-password"
                name="customerPassword"
                placeHolder="Password"
                ref="customerPassword"
                required
                validations={{ "required": "this is required", "someError": "this is for additional  Validation" }}
            ></MGMInputPassword>
            <MGMInputPassword
                label="RePassword"
                id="sign-up-repassword"
                classNames="sign-up-repassword"
                name="customerRePassword"
                placeHolder="RePassword"
                ref="customerRePassword"
                someData={this.refs.customerPassword}
                required
                validations={{ "required": "this is required", "someError": "passWord Should Match" }}
            ></MGMInputPassword>
            <MGMInputNumber
                label="Number"
                id="customerNumber"
                classNames="customerNumber"
                name="customerNumber"
                placeHolder="customer Number"
                ref="customerNumber"
                someData={this.refs.customerNumber}
                required
                validations={{ "required": "this is required" }}
            ></MGMInputNumber>
            <MGMDropdown
                label="State Selection"
                id="selectStateID"
                classNames="selectStateClass"
                buttonClassName="selectButtonClass"
                name="selectState"
                ref="selectState"
                defaultItem="Please Select"
                selectItems={this.stateObj.US}
                required
                validations={{ "required": "this is required" }}
            >
            </MGMDropdown>

            <button onClick={this.MGMInputValidate.bind(this)}>
                clickME
            </button>
        </div>
    }

}