import React from 'react';
import './HomeCoffe.scss'



const HomeContainer = props =>{
    return (
       <nav class="wrapper-nav">
            <ul class="wrapper-list">
                <li>
                    <a className="nav-item">Active</a>
                </li>
                <li>
                    <a className="nav-item">Link</a>
                </li>
                <li>
                    <a className="nav-item">Link</a>
                </li>
                <li>
                    <a className="nav-item">Disabled</a>
                </li>
            </ul>
        </nav>
    );
}

export default HomeContainer;