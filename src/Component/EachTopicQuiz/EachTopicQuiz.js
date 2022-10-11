import React from 'react';
import { useLoaderData } from 'react-router-dom';
import EachTopicQuizComponent from '../EachTopicQuizComponent/EachTopicQuizComponent';

const EachTopicQuiz = () => {
    const loadQuestions = useLoaderData();
    const quizQuestions = loadQuestions.data;
    console.log(quizQuestions)
    const {id, logo, name, questions, total} = quizQuestions;
    
    return (
        <div>
            <h2>Quiz For {name}</h2>
            {
                questions.map(q => <EachTopicQuizComponent key={id} q={q} index={questions.indexOf(q)}></EachTopicQuizComponent>)
            }
            <div>
                <p>Total number of quiz: {total}</p>
                
            </div>
        </div>
    );
};

export default EachTopicQuiz;