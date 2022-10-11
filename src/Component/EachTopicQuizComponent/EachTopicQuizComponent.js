import React, { useState } from 'react';
import QuizOptions from '../QuizOptions/QuizOptions';
import './EachTopicQuizComponent.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EachTopicQuizComponent = ({ q, index }) => {
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

    };
    const showToastMessage = () => {
        toast(correctAnswer);
    };

    return (
        <div className='container d-flex'>
            <div className='question-container container mb-4 p-5 position-relative'>
                <h3>Quiz:{index + 1}. {question}</h3>
                <div className='conatiner mt-3'>
                    <div className='row row-cols-2 gy-3'>
                        {
                            options.map(option => <QuizOptions key={id} option={option} correctAnswer={correctAnswer} handleChange={handleChange} i={options.indexOf(option)}></QuizOptions>)
                        }
                    </div>
                </div>
                <div className={`answer ${message === 'correct' && `correct-answer`}`}>
                    <p>Correct Answer</p>
                </div>
                <div className={`answer ${message === 'wrong' && `correct-answer`}`}>
                    <p>Wrong Answer</p>
                </div>
                <div>
                    <div>
                        <div className='position-absolute top-0 end-0'>
                            <button onClick={showToastMessage} className='btn bg-none'><FontAwesomeIcon icon={faEye} /></button>
                        </div>
                        <ToastContainer></ToastContainer>
                    </div>

                </div>

            </div>


        </div>
    );
};

export default EachTopicQuizComponent;