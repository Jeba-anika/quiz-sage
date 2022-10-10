import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import './Home.css';


const Home = () => {
    const loadQuizzes = useLoaderData();
    const quizzes = loadQuizzes.data;
    console.log(quizzes)
    return (
        <div>
            <div className='home-header container mb-3 mt-3'>
                <div className='row row-cols-1 row-cols-lg-2'>
                    <div className='col img-div'>
                        <img src={require("../../images/header-bg1.png")} alt="" />
                    </div>
                    <div className='col'>
                        <p className='fs-3 fw-bold text-start header-text mt-5'>Take part in the quizzes and judge yourself and be a tech geek.
                            There are several quizzes designed on different topics. You can take part in all those and judge your understanding.
                        </p>
                        {/* <button>Show All Topics</button> */}
                    </div>
                </div>
            </div>
            <div className=' container'>
                <div className='row row-cols-2 row-cols-md-2 row-cols-lg-4 ms-xl-5 ms-lg-0 ms-md-5 gy-4'>
                    {
                        quizzes.map(quiz => <Quiz key={quiz.id} quiz={quiz}></Quiz>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;