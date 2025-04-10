import React from 'react'
import GameLogo from '../atoms/GameLogo'
import Header from '../atoms/Header'

export default function MainHeader() {
    return (
        <div className='header-container'>
            <Header />
            <GameLogo />
            <hr />
        </div>
    )
};