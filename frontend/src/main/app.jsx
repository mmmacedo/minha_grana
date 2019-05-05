import React from 'react';
import '../common/template/dependencies';

import Header from '../common/template/header/header';
import Sidebar from '../common/template/sidebar/sidebar';
import Footer from '../common/template/footer/footer';

export default props => (
    <div className='wrapper'>
        <Header/>
        <Sidebar/>
        <div className='content-wrapper'>
            <h1>App</h1>
        </div>
        <Footer/>
    </div>
)