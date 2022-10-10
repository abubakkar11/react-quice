import React from 'react';
import { BeakerIcon } from '@heroicons/react/24/solid'

const Topic = ({topic}) => {
    const {logo , name} = topic;
    return (
        <div className='w-52 items-center bg-white drop-shadow-md inline p-2'>
            <div>
               <img className='w-48 ' src={logo} alt="" />
            </div>
            <div className='flex mt-3 justify-between'>
                <h3 className='mr-5'>{name}</h3>
                <button className='bg-blue-600 p-1 text-white hover:bg-blue-400'>
                    
                 Start Quice
                 <BeakerIcon className="h-6 w-6 text-blue-500"/>
                </button>
            </div>
        </div>
    );
};

export default Topic;