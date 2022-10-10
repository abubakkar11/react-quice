import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../component/Header/Header';

const Main = () => {
    return (
        <div>
            {/* Add header component */}
            <Header></Header>
            {/* Add outlet in react-dom */}
            <Outlet></Outlet>
        </div>
    );
};

export default Main;