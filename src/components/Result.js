import React from 'react';
import PropTypes from 'prop-types';

const Result = ({num}) =>(
    <div className="result">
        <span>{num}</span>
    </div>);
    Result.propTypes = {
        num: PropTypes.string.isRequired,
    };
    
export default Result;