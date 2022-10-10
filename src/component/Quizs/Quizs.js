import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Quizs = () => {
    const quizs = useLoaderData();
    console.log('asdfa')
    return (
        <div>
            <h1>This is quiz : {quizs.length}</h1>
        </div>
    );
};

export default Quizs;