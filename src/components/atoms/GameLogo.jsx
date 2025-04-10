import React, { useEffect, useState } from 'react'
import { getRandomImage } from '../../utils/imageLoader'
import * as localImportModules from '../../utils/moduleImports'

// osrs main logo
const GameLogo = () => {
    const [gameLogo, setGameLogo] = useState(getRandomImage(localImportModules.gameLogos));

    // function for handling gameLogo state change
    const handleLogoChange = () => {
        setGameLogo(getRandomImage(localImportModules.gameLogos, gameLogo.id))
    };

    return (
        <img
            className={'rs-logo'}
            src={gameLogo.url}
            alt='osrs-logo'
            onClick={handleLogoChange}
        />
    )
};

export default GameLogo;