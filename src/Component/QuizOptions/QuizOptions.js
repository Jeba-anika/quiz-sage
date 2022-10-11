import React, { useState } from 'react';
import './QuizOptions.css'

const QuizOptions = ({ option, correctAnswer ,handleChange}) => {
    // console.log(option, correctAnswer)
    
    return (
        <div>
            <div>
                <button onClick={()=> handleChange(option)} >{option}</button>
            </div> 
            
        </div>

    );
};

export default QuizOptions;

// className={`btn btn-warning ${value === true && `selected-option`}`}