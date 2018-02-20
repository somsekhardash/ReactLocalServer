import React from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';

export default class MGMDropdown extends React.Component {
    constructor(props) {
        super(props);
        this.isValid = true;
        this.state = {
            errorMessage: '',
            open: false,
            selectedValue:-1,
            defaultItem: props.defaultItem
        }
        this._errorMessage = '';
        this.validations = {
        }
        Object.assign(this.validations, this.props.validations);
    }

    validate() {
        if (!!this.validations && this.isValid) {
            for (var rule in this.validations) {
                if (this.isValid)
                    this.defaultValidator({ [rule]: this.validations[rule] });
            }
            if (this.isValid){
                this.customValidator();
            }
        }
        return {"isValid":this.isValid,"errorMessage":this._errorMessage};
    }

    customValidator(){
        return true;
    }

    makeValid() {
        this.setState({
            errorMessage: ''
        });
        this._errorMessage = '';
        this.isValid = true;
    }

    makeInvalid(errorMessage) {
        this.setState({
            errorMessage: errorMessage
        });
        this._errorMessage = errorMessage;
        this.isValid = false;
    }

    defaultValidator(errorObj) {
        let myKey = Object.keys(errorObj)[0];
        switch (myKey) {
            case "required": {
                if (this.state.selectedValue == -1 && this.props.required) {
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

    getSubOptions(items) {
        return (
            items.map((item, i) => (
                <li key={i} onClick={this.selectItem.bind(this,[Object.keys(item)[0],Object.values(item)[0]])} value={Object.keys(item)[0]}>{Object.values(item)[0]}</li>
            ))
        );
    }

    toggleSelectBox(){
        this.setState({
            open: !this.state.open
        })
    }

    selectItem(item){
        this.setState({
            open: !this.state.open,
            selectedValue: item[0],
            defaultItem: item[1]
        });
        this.isValid = true;
    }

    render() {
        return <div className={`${this.isValid ? '' : 'error'} field-wrapper form-group `} >
            {this.props.label && <label
                htmlFor={this.props.id}
                className={`${this.props.required ? 'required' : ''} ${this.props.classNames}-label`}
                aria-required={this.props.required}>{this.props.label}</label>}

            <div className={this.props.buttonClassName}>
                <ul className={`${this.props.buttonClassName}-ul`}>
                    {this.props.defaultItem &&
                        <li selectedvalue={this.state.selectedValue} onClick={this.toggleSelectBox.bind(this)}><b>{this.state.defaultItem}</b></li>}
                    {this.state.open && this.getSubOptions(this.props.selectItems)}
                </ul>
            </div>

            {!this.isValid && <p
                className="error label"
                generated="true">
                {this.state.errorMessage}
            </p>}
        </div>
    }
}

MGMDropdown.propTypes = {
    label: PropTypes.string,
    id: PropTypes.string,
    required: PropTypes.bool,
    readonly: PropTypes.bool,
    className: PropTypes.string,
    name: PropTypes.string,
    placeHolder: PropTypes.string,
    value: PropTypes.string,
    maxLength: PropTypes.number,
    minLength: PropTypes.number,
};


MGMDropdown.defaultProps = {
}

