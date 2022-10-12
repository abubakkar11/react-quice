import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex items-center p-2 sticky top-0  bg-gray-800 text-white'>
        <div>
          <h1 className='text-2xl uppercase ml-28'>Learn More</h1>
        </div>
        {/* Navbar start */}
        <nav className='text-1xl p-3 uppercase ml-auto mr-28'>
            <Link className='ml-3 hover:text-orange-500' to = '/home'>Home</Link>
            <Link className='ml-3 hover:text-orange-500' to = '/topics'>Topics</Link>
            <Link className='ml-3 hover:text-orange-500' to = '/statistics'>Statistics</Link>
            <Link className='ml-3 hover:text-orange-500' to = '/blog'>Blog</Link>
        </nav>
        {/* Navbar end */}
        </div>
    );
};

export default Header;