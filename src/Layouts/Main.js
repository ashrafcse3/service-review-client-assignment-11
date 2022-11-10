import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';
import ScrollToTopWrapper from '../Pages/Utilities/ScrollToTopWrapper';

const Main = () => {
    return (
        <div>
            <ScrollToTopWrapper>
                <Header></Header>
                <Outlet></Outlet>
                <Footer></Footer>
            </ScrollToTopWrapper>
        </div>
    );
};

export default Main;