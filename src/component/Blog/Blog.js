import React from 'react';

const Blog = () => {
    return (
        <div>
           <div className='w-8/12 border border-2 border-gray-600 p-5 rounded-md mt-10 bg-slate-100 text-center ml-60 t00'>
           <h2 className="text-3xl">What is the purpose react router?</h2>
           <p>Amswer : React Router is a library for routing in React . 
            Routing is a process of binding a web URL to a specific resource in the web application. 
            In React it is binding an URL to a component.
            </p>
           </div>
           <div className='w-8/12 border border-2 border-gray-600 p-5 mt-10 bg-slate-100 text-center ml-60 t00'>
           <h2 className="text-3xl">How does context api work?</h2>
           <p>Amswer : React Context provides a way to pass data through the component tree without having to pass props down manually at every level.
           React Context provides a way to pass data through the component tree without having to pass props down manually at every level.  
            
            </p>
           </div>
           <div className='w-8/12 border border-2 border-gray-600 p-5 mt-10 bg-slate-100 text-center ml-60 t00'>
           <h2 className="text-3xl">Useref Hook</h2>
           <p>Amswer : The useRef Hook allows you to persist values between renders.
           The useRef is a hook that allows to directly create a reference to the DOM element in the functional component.
           The useRef Hook is a function that returns a mutable ref object whose .current property is initialized with the passed argument.
           UseRef is one of the standard hooks provided by React.
            </p>
           </div>
        </div>
    );
};

export default Blog;