import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';

import Menu from './Menu';
import Gallery from './Gallery';
import Contacts from './Contacts';
import About from './About';
import logo from './Photos/logo.png';
import Home from './Home';


function Navigation() {
    const [isOpen, setOpen] = useState(true);

    return(
        <Router>
            <div className='container'>
                <div className='logo'>
                <Link to='/home'><img src={logo} alt='pic' width='150px'/></Link>
                    <h1>Ye Olde Shed / Suckin' Diesel</h1>
                </div>
                <button className='navi_button' onClick={()=> setOpen(!isOpen)}></button>
                <div className={`navi ${isOpen ? 'active' : ''}`}>
                    <Link to='/menu' className="item" id="menu">Меню</Link>
                    <Link to='/gallery' className="item" id="photo">Галерея</Link>
                    <Link to='/contacts' className="item" id="phone">Контакты</Link>
                    <Link to='/about' className='item' id='about'>О нас</Link>
                </div>
                <Routes>
                    <Route path='*' element={<p></p>} />
                    <Route path='/menu' element={<Menu/>} />
                    <Route path='/gallery' element={<Gallery/>} />
                    <Route path='/contacts' element={<Contacts/>} />
                    <Route path='/about' element={<About/>} />
                </Routes>
                
            </div>
            
            <Routes>
                <Route path='/home' element={<Home/>} /> 
            </Routes>    
        </Router>
)}
export default Navigation;