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
        Object.assign(this.validations, this.props.validations);
    }

    render() {
        return <div className={`${this.isValid ? '' : 'error'} field-wrapper form-group`} >
            {this.props.label && <label
                htmlFor={this.props.id}
                className={`${this.props.required ? 'required' : ''} ${this.props.classNames}-label `}
                aria-required={this.props.required}>{this.props.label}</label>}
            <input
                type="password"
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

MGMInputPassword.propTypes = {
    label: PropTypes.string,
    id: PropTypes.string,
    required: PropTypes.bool,
    readonly: PropTypes.bool,
    class: PropTypes.string,
    name: PropTypes.string,
    placeHolder: PropTypes.string,
    value: PropTypes.string,
    maxLength: PropTypes.string,
    pattern: PropTypes.object
};


MGMInputPassword.defaultProps = {
    pattern: /((?=.*\d)(?=.*[a-z])(?=.*[A-Z]))/g,
    maxLength: "8",
    minLength: "20"
}

