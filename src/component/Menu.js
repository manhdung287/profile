import React from 'react';
import { ROUTER } from '../modules/ultils/router';


import './Menu.scss';
function Menu() {
    return (
        <div className='menu'>
           
            <a href={ROUTER.dragFile}  className='nav-item'>
                Drag File
            </a>
            <a href={ROUTER.dragItem}  className='nav-item'>
                Drag - Sort
            </a>
            <a href={ROUTER.buildPage}  className='nav-item'>
                Build Page
            </a>
        </div>
    );
}

export default Menu;