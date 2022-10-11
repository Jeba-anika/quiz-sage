import React, { useState } from 'react';
import QuizOptions from '../QuizOptions/QuizOptions';
import './EachTopicQuizComponent.css'

const EachTopicQuizComponent = ({ q }) => {
    const { question, options, id, correctAnswer } = q;
    const [value, setValue] = useState(true);
    const [message, setMessage] = useState('');
    const [points, setPoints] = useState(0);
    const handleChange = o => {
        setValue(!value);
        console.log(o)
        if (o === correctAnswer) {
            setMessage('correct');
            setPoints(points + 1);
        } else {
            setMessage('wrong');
            
        }

    }
    console.log(message)
    return (
        <div className='container d-flex'>
            <div className='question-container container'>
                <div>
                    <h3>{question}</h3>
                </div>
                <div className='conatiner'>
                    <div className='row row-cols-2 gy-3'>
                        {
                            options.map(option => <QuizOptions key={id} option={option} correctAnswer={correctAnswer} handleChange={handleChange}></QuizOptions>)
                        }
                    </div>
                </div>
                <div className={`answer ${message === 'correct' && `correct-answer`}`}>
                    <p>Correct Answer</p>
                </div>
                <div className={`answer ${message === 'wrong' && `correct-answer`}`}>
                    <p>Wrong Answer</p>
                </div>
            </div>
            
        </div>
    );
};

export default EachTopicQuizComponent;