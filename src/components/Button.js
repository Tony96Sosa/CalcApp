import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ value, ClickHandle}) => (
    <button onClick={() => ClickHandle(value) }>
        <span>{ value }</span>
    </button>);
Button.propTypes = {
    value: PropTypes.string.isRequired,
    ClickHandle: PropTypes.func.isRequired,
}

export default Button;