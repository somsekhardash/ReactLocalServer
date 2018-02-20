import React from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';
import MGMInput from './../MGMInputText/index'

export default class MGMInputPassword extends MGMInput {
    constructor(props) {
        super(props);
        this.validations = {
            "pattern": "This is default Error",
            "minLength": "This is default minLength Error",
            "errorMessage": "This is default maxLength Error"
        }
        this.state = {
            type: true,
            value: '',
            showFlag: false
        };
        Object.assign(this.validations, this.props.validations);
        this.cPattern = /^[ A-Za-z0-9.\-\/+=_ !$\*?@#,']*$/;
        this.type = "password";
    }

    customValidator() {
        if (this.isValid && this.state.value.length > 0 && !this.cPattern.test(this.state.value))
            this.makeInvalid(this.props.validations.someError);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        });
        this.isValid = true;
        if (event.target.value.length > 0){
            this.showFlag = true;
        }
        if (event.target.value.length > 0 && !!this.props.someData && this.props.someData.getValue() !== event.target.value) {
            this.makeInvalid("password are not matching");
        }
    }

    showPassword() {
        this.setState({
            type: !this.state.type
        });
    }


    render() {
        return <div className={`${this.isValid ? '' : 'error'} field-wrapper form-group`} >
            {this.props.label && <label
                htmlFor={this.props.id}
                className={`${this.props.required ? 'required' : ''} ${this.props.classNames}-label `}
                aria-required={this.props.required}>{this.props.label}</label>}
            <input
                type={this.state.type ? "password" : "text"}
                id={this.props.id}
                name={this.props.name}
                readOnly={this.props.readonly}
                required={this.props.required}
                placeholder={this.props.placeHolder}
                className={this.props.classNames}
                value={this.state.value}
                onChange={this.handleChange.bind(this)}
            />

            {this.showFlag && <span onClick={this.showPassword.bind(this)}>#</span>}

            {!this.isValid && <p
                className="error label"
                generated="true">
                {this.state.errorMessage}
            </p>}
        </div>
    }
}


MGMInputPassword.defaultProps = {
    pattern: /((?=.*\d)(?=.*[a-z])(?=.*[A-Z]))/g,
    maxLength: 10,
    minLength: 3
}

