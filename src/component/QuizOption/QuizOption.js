import React from 'react';

const QuizOption = ({option , quizAnser ,setAnswer}) => {
    return (
        <div className='hover:bg-slate-500 hover:text-white hover:rounded-md '>
          <button onClick={() => quizAnser(option)} className='p-5 px-44 w-full  flex items-center border border-2 border-gray-500 rounded-md'>
            {option}
          </button>
        </div>
    );
};

export default QuizOption;