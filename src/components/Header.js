import React from 'react';
import Navigation from './Navigation';

function Header(props) {
    return (
        <header>
            <h1 className="text-2xl font-bold">David Chung</h1>
            <Navigation />
        </header>
    );
}

export default Header;