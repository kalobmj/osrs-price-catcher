import React from 'react'
import { useState, useEffect } from 'react'
import { getRandomImage } from '../../utils/imageLoader';
import * as localImageModules from '../../utils/moduleImports'

// bottom img art
const BottomImage = () => {
    const [bottomImage, setBottomImage] = useState(getRandomImage(localImageModules.bottomImages));

    // function for handling url state change
    const handleImageChange = () => {
        setBottomImage(getRandomImage(localImageModules.bottomImages, bottomImage.id))
    };

    return (
        <div className='bottom-image-container'>
            <img
                className={`bottom-image ${bottomImage.id}`}
                src={bottomImage.url}
                alt='bottom-img art-by-Soff(Chili)'
                onClick={handleImageChange}
            />
        </div>
    )
};

export default BottomImage;