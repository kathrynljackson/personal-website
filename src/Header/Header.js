import React from 'react';
import { Component } from 'react';
import './Header.css';

function Header() {

    return(
            <nav className='header-nav'>
                <a href ='/aboutme'>About Me</a>
                <a href='/myprojects'>My Projects</a>
                <a href='https://github.com/kathrynljackson'>My Github</a>
            </nav>
    )
}


export default Header;