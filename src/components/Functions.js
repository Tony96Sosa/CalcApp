import React from 'react';
import Button from './Button';
import PropTypes from 'prop-types';

const Functions = ({ onContentClear, onDelete}) => (
    <section className="functions">
        <Button value='clear' ClickHandle={onContentClear} />
        <Button value='&larr;' ClickHandle={onDelete} />
    </section>);

Functions.propTypes = {
    onContentClear: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
}

export default Functions;