import React from 'react';
import './Quiz.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight} from '@fortawesome/free-solid-svg-icons';

const Quiz = ({ quiz }) => {
    const { id, name,logo, total } = quiz;
    return (
        <div className='col'>
            <div className="card card-size" >
                <img src={logo} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">Total Quiz: {total}</p>
                        <button className='btn btn-warning btn-quiz  fs-5'>Take Quiz <FontAwesomeIcon icon={faArrowRight} /></button>
                    </div>
            </div>
        </div>
    );
};

export default Quiz;