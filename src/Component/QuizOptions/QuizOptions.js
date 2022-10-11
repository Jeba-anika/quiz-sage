import React, { useState } from 'react';
import './QuizOptions.css'

const QuizOptions = ({ option, correctAnswer, handleChange, i }) => {
    // console.log(option, correctAnswer)

    return (
        <div className='btn-container'>
            <button onClick={() => handleChange(option)} >{i + 1}{option}</button>
        </div>

    );
};

export default QuizOptions;

// className={`btn btn-warning ${value === true && `selected-option`}`}