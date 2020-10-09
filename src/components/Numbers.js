import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const numbers = [1,2,3,4,5,6,7,8,9,0];
const renderButtons = onClickNumber => {
    const buttons = numbers.map( number =>
    <Button 
        key={ number }
        value={ number.toString() } 
        ClickHandle={ onClickNumber } 
    />)
    return buttons;
}

const Numbers = ({ onClickNumber }) => (
        <section className="numbers">
            { renderButtons(onClickNumber) }
        </section>
    );
Numbers.propTypes = {
    onClickNumber: PropTypes.func.isRequired,
}
export default Numbers;