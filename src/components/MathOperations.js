import React from 'react';
import Button from './Button';
import PropTypes from 'prop-types';

const MathOperations = ({ onClickOperation, onClickEqual }) => (
    <section className="math-operations">
        <Button value="+" ClickHandle={onClickOperation} />
        <Button value="-" ClickHandle={onClickOperation} />
        <Button value='*' ClickHandle={onClickOperation} />
        <Button value="/" ClickHandle={onClickOperation} />
        <Button value="=" ClickHandle={onClickEqual} />
    </section>);

MathOperations.propTypes = {
    onClickOperation: PropTypes.func.isRequired,
    onClickEqual: PropTypes.func.isRequired,
}

export default MathOperations;