import React, { useState } from 'react';

import './EachTopicQuizComponent.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EachTopicQuizComponent = ({ q, index }) => {
    const { question, options, id, correctAnswer } = q;
    const [value, setValue] = useState();

    const handleCheck = selected => {
        setValue(selected);
        if (selected === correctAnswer) {
            toast.success('Correct Answer')
        } else {
            toast.error('Wrong Answer')
        }
    };
    const handleSelected = selected => {
        if (value === selected && value === correctAnswer) {
            return "select";
        } else if (value === selected && selected !== correctAnswer) {
            return "wrong";
        } else if (selected === correctAnswer) {
            return "select";
        }
    }
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
                                options.map(option => <div><button className={`btn-container ${value && handleSelected(option)}`}
                                    onClick={() => handleCheck(option)}
                                    key={option}
                                    disabled={value}>{option}
                                </button></div>)
                            }
                        

                    </div>
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