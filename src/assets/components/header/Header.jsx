import './Header.css'
import React from 'react';

function Header() {
    return (
        <div>
            <header className='container'>
                <h1>Exclusive</h1>
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Sign Up</a></li>
                    </ul>
                </nav>
                <div className="header-div">
                    <div className="input-container">
                        <input placeholder="What are you looking for?" class="input-field" type="text"/>
                            <label for="input-field" className="input-label">Enter text</label>
                            <span className="input-highlight"></span>
                    </div>

                </div>
            </header>
            <hr />
        </div>
    )
};

export default Header;