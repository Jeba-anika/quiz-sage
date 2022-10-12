import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Topic.css'

const Topic = () => {
    const data  = useLoaderData().data;
    console.log(data)
    
    return (
        <div className='container mt-5 topic'>
            <div className='row row-cols-lg-4 row-cols-md-4 '>
            {
                data.map(topic => <div>
                    
                    <img className='topic-img' src={topic.logo} alt="" />
                    <p className='fw-bold'>{topic.name}</p>
                    
                </div>)
            }
            </div>
        </div>
    );
};

export default Topic;