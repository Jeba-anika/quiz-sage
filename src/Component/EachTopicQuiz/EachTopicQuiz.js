import React from 'react';
import { useLoaderData } from 'react-router-dom';

const EachTopicQuiz = () => {
    const questions = useLoaderData()
    return (
        <div>
            <h2>Each topic quiz</h2>
        </div>
    );
};

export default EachTopicQuiz;