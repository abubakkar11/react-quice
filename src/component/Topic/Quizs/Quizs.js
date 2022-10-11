import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../../../Quiz/Quiz';

const Quizs = () => {
    const quizs = useLoaderData();
    console.log(quizs.data)
    return (
        <div>
            <h2 className="text-3xl text-indigo-500 mt-10 font-bold">Quiz Name : {quizs.data.name}</h2>
           {
            quizs.data.questions.map(quiz => <Quiz
            key = {quiz.id}
            quiz = {quiz}
            ></Quiz>)
           }
        </div>
    );
};

export default Quizs;