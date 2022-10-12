import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';
import image from './image/quiz.webp'

const Home = () => {
    const topics = useLoaderData();
    return (
        <div>
            <div className='md:flex justify-between items-center ml-32 mr-32'>
                <div>
                <img className='w-60' src={image}alt="" />
                </div>
                <div>
                    <h1 className="text-2xl bg-sky-600 p-5  md:visible rounded-md text-white">Are You Ready For Quiz Anser!!! </h1>
                </div>
            </div>
            <div className='grid md:grid-cols-4 gap-10 ml-12 p-16'>
            {
                topics.data.map(topic => <Topic
                key = {topic.id}
                topic = {topic}
                ></Topic>)
            }
            </div>
        </div>
    );
};

export default Home;