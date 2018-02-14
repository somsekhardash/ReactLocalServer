import React from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';
import MGMInputText from './../MGMInputText/index'

export default class MGMInputEmail extends MGMInputText {
    constructor(props) {
        super(props);
        this.validations = {
            "pattern": "This is default pattern Error"
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


MGMInputEmail.defaultProps = {
    pattern: /((?=.*\d)(?=.*[a-z])(?=.*[A-Z]))/g
}

