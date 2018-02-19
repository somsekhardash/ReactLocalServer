import React from 'react';
import { render } from 'react-dom';
import validate from './formUtility';

export default class MainForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fName: { value: '', errorMessage: '', isValid: true },
            fPassword: { value: '', errorMessage: '', isValid: true }
        };

        this.formRule = {
            fName: {
                "isValid": true,
                "errorMessage": this.state.fName.errorMessage,
                "value": this.state.fName.value,
                "rules": ["required"]
            }, fPassword: {
                "isValid": true,
                "errorMessage": this.state.fPassword.errorMessage,
                "value": this.state.fPassword.value,
                "rules": ["required"]
            }
        };

        this.validateForm = this.validateForm.bind(this);
    }

    handleChangefName(event) {
        this.setState({ fName: { value: event.target.value, errorMessage: '', isValid: true } });
    }

    handleChangefPassword(event) {
        this.setState({ fPassword: { value: event.target.value, errorMessage: '', isValid: true } });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.validateForm(validate(this.formRule));
    }

    validateForm(resultForm) {
        debugger;
        resultForm.forEach(element => {
            let nodeName = element.fieldName;
           
            this.setState({
                [nodeName]: element
            });


        });
    }

    render() {
        return (
            <form name="test1">
                <label> Name: </label>
                <input
                    type="text"
                    name="fName"
                    value={this.state.value1}
                    onChange={this.handleChangefName.bind(this)} />
                {!this.state.fName.isValid && <p className="error">{this.state.fName.errorMessage}</p>}
                <br />
                <label> Password: </label>
                <input
                    type="password"
                    name="fPassword"
                    value={this.state.value2}
                    onChange={this.handleChangefPassword.bind(this)} />
                {!this.state.fPassword.isValid && <p className="error">{this.state.fPassword.errorMessage}</p>}
                <br />
                <button onClick={this.handleSubmit.bind(this)}>
                    Submit
                </button>
            </form>
        );

    }

}