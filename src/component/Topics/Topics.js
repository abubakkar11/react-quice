import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

const Topics = () => {
    const topics = useLoaderData();
    return (
        <div>
            <div>
                <h1>This is topics</h1>
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

export default Topics;