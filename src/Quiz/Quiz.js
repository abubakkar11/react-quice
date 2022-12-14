import React, { useState } from 'react';
import QuizOption from '../component/QuizOption/QuizOption';
import { EyeIcon } from '@heroicons/react/24/solid'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Quiz = ({quiz}) => {
    const [anser , setAnswer] = useState([]);
    const {question , options , correctAnswer} = quiz;
    const notify = () => toast(` ${correctAnswer}`);
    const quizAnser = (answer) =>{
      if( answer === correctAnswer){
       toast('Wrong Answer');
      }
      else{
      toast('Correct Answer');
      }
    }
    return (
   
        <div className='md:w-50 p-20 ml-36 mr-36  shadow-md text-indigo-500 mt-10  border-solid border-2 border-gray-200'>
            <h2 className="text-2xl">
            </h2>
            <div className='mb-10 flex justify-center'>
            <h2 className="text-3xl ml-10">Quiz: {question}</h2>
            <button onClick={notify}><EyeIcon className="h-6 w-10 md:ml-96 text-blue-500"/></button>
            <ToastContainer />
            </div>
            <div className='grid md:grid-cols-2 gap-5 '>
               {
                options.map(option => <QuizOption
                option = {option}
                quizAnser = {quizAnser}
                setAnswer = {setAnswer}
                ></QuizOption>)
               }
            </div>
        </div>
    );
};

export default Quiz;