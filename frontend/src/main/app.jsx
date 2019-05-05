import React from 'react';
import '../common/template/dependencies';

import Header from '../common/template/header/header';
import Sidebar from '../common/template/sidebar/sidebar';


export default props => (
    <div className='wrapper'>
        <Header/>
        <Sidebar/>
        <div className='content-wrapper'>
            <h1>Teste App</h1>
        </div>
    </div>
)