import React from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';
import MGMInput from './../MGMInputText/index'

export default class MGMInputEmail extends MGMInput {
    constructor(props) {
        super(props);
        if (!this.props.pattern)
            this.pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        else
            this.pattern = this.props.pattern;
    }

    defaultValidator() {
        if (!!this.state.value && this.state.value.length > 0 && !this.pattern.test(this.state.value))
            this.makeInvalid("invalid eMail ID");
        else
            this.makeValid();
    }

    costomValidator(errorObj) {
        let myKey = Object.keys(errorObj)[0];
        switch (myKey) {
            case "pattern": {
                if (!!this.state.value && this.state.value.length > 0) {
                    debugger;
                    if (!this.pattern.test(this.state.value))
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

    render() {
        return <div className={`${this.isValid ? '' : 'error'} field-wrapper form-group`} >
            {this.props.label && <label
                htmlFor={this.props.id}
                className={`${this.props.required ? 'required' : ''} ${this.props.classNames}-label `}
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

MGMInputEmail.propTypes = {
    label: PropTypes.string,
    id: PropTypes.string,
    required: PropTypes.bool,
    readonly: PropTypes.bool,
    class: PropTypes.string,
    name: PropTypes.string,
    placeHolder: PropTypes.string,
    value: PropTypes.string,
    maxLength: PropTypes.string
};