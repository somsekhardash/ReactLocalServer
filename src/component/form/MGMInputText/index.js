import React from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';

export default class MGMInput extends React.Component {
    constructor(props) {
        super(props);
        this.isValid = true;
        this.state = {
            errorMessage: '',
            value: props.value ? props.value : ''
        }
    }

    requiredValidation() {
        if (this.props.required && !this.state.value) {
            this.makeInvalid(this.props.validations["required"]);
        } else {
            this.makeValid();
        }
    }

    setValue(val) {
        this.setState({
            value: val
        });
    }

    getValue() {
        return this.state.value;
    }

    validate() {
        this.requiredValidation();
        if (this.isValid)
            this.defaultValidator();
            if (!!this.props.validations && this.isValid){
                for (var rule in this.props.validations) {
                    if (this.isValid) 
                        this.costomValidator({ [rule]: this.props.validations[rule] });
                }
            }
        return this.isValid;
    }

    makeValid() {
        this.setState({
            errorMessage: ''
        });
        this.isValid = true;
    }

    makeInvalid(errorMessage) {
        this.setState({
            errorMessage: errorMessage
        });
        this.isValid = false;
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        });
        this.isValid = true;
    }

    costomValidator(errorObj) {
        let myKey = Object.keys(errorObj)[0];
        switch (myKey) {
            case "maxLength": {
                if (!!this.state.value && this.state.value.length > this.props.maxLength) {
                    this.makeInvalid(errorObj[myKey]);
                } else {
                    this.makeValid();
                }
            }
                break;
            case "minLength": {
                if (!!this.state.value && this.state.value.length < this.props.minLength) {
                    this.makeInvalid(errorObj[myKey]);
                } else {
                    this.makeValid();
                }
            }
                break;
            default:
                return true;
        }
    }


    defaultValidator() {
        if (this.state.value.length == 0) {
            this.makeInvalid("default required");
        }
    }

    render() {
        return <div className={`${this.isValid ? '' : 'error'} field-wrapper form-group `} >
            {this.props.label && <label
                htmlFor={this.props.id}
                className={`${this.props.required ? 'required' : ''} ${this.props.classNames}-label`}
                aria-required={this.props.required}>{this.props.label}</label>}

            <input
                type="text"
                id={this.props.id}
                name={this.props.name}
                readOnly={this.props.readonly}
                required={this.props.required}
                placeholder={this.props.placeHolder}
                className={this.props.classNames}
                value={this.state.value}
                onChange={this.handleChange.bind(this)}
            />

            {!this.isValid && <p
                className="error label"
                id="sign-up-email-error"
                generated="true">
                {this.state.errorMessage}
            </p>}
        </div>
    }
}

MGMInput.propTypes = {
    label: PropTypes.string,
    id: PropTypes.string,
    required: PropTypes.bool,
    readonly: PropTypes.bool,
    className: PropTypes.string,
    name: PropTypes.string,
    placeHolder: PropTypes.string,
    value: PropTypes.string,
    maxLength: PropTypes.string
};