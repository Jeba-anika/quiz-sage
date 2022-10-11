import React from 'react';
import { useLoaderData } from 'react-router-dom';

const EachTopicQuiz = () => {
    const loadQuestions = useLoaderData();
    const quizQuestions = loadQuestions.data;
    console.log(quizQuestions)
    const {id, logo, name, questions} = quizQuestions;
    return (
        <div>
            <h2>Quiz For {name}</h2>
        </div>
    );
};

export default EachTopicQuiz;