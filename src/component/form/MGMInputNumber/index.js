import React from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';
import MGMInput from './../MGMInputText/index'

export default class MGMInputNumber extends MGMInput {
    constructor(props) {
        super(props);
        this.validations = {
            "pattern": "invalid mobile number",
            "maxLength": "Mobile number must be less then 16",
            "minLength": "Mobile number must be more then 10"
        }
        Object.assign(this.validations, this.props.validations);
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
                generated="true">
                {this.state.errorMessage}
            </p>}
        </div>
    }
}


MGMInputNumber.defaultProps = {
    pattern:/^((\+?[1-9]\d-?)|(\+?[1-9]\d -?)|(\+?[1-9]\d - ?)|(\+?[1-9]\d- ?)|(\+?\(?[1-9]\d\)?-?)|(\+?\(?[1-9]\d\)? - ?)|(\+?\(?[1-9]\d\)? -?)|(\+?\(?[1-9]\d\)?- ?)|(\+?1- ?)|(\+?1 -?)|(\+?1)|(\+?1 - ?)|(\+?\(?1\)?- ?)|(\+?\(?1\)? - ?))?(\([2-9]([02-9]\d|1[02-9])\)|[2-9]([02-9]\d|1[02-9]))-?[0-9]([02-9]\d|1[02-9])-?\d{4}$/,
    minLength: 10,
    maxLength: 16
}

