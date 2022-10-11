import React from 'react';
import { ArrowSmallRightIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const Topic = ({topic}) => {
    const {logo , name , id , total} = topic;
    return (
        <div className='w-56 items-center bg-slate-200 drop-shadow-md inline p-2'>
            <div>
               <img className='w-52 ' src={logo} alt="" />
            </div>
            <div className='flex mt-3 justify-between items-center'>
                <div>
                <h3 className='mr-5'>{name}</h3>
                <p><small className='p-2 font-bold'>Total quiz : {total}</small></p>
                </div>
                <Link to ={`/quizs/${id}`}>
                <button className='bg-blue-600 p-1 text-white hover:bg-blue-400 rounded-sm flex items-center'>
                Start Quice
                <ArrowSmallRightIcon className='w-5'/>
                </button>
                </Link>
            </div>
        </div>
    );
};

export default Topic;