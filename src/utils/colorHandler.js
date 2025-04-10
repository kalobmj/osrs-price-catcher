import * as localModuleImports from './moduleImports.js'
import { getSpecificImage } from './imageLoader.js';

// console.log(localModuleImports)


// button style props based on matching image urls
const buttonProps = [
    {
        id: 0,
        underlayingImage: `test`,
        linearGradient: 'linear-gradient(rgba(221, 19, 19, 0.5), rgba(245, 220, 164, 0.5))',
        backgroundWallpaper: `${getSpecificImage(localModuleImports.backgroundImages, 'Tztok').url}`
    },
    {
        id: 1,
        underlayingImage: `url(${getSpecificImage(localModuleImports.changedUnderlayImages, 'ElysianSpiritShield').url})`,
        linearGradient: 'linear-gradient(rgba(2, 38, 117, 0.5), rgba(156, 145, 145, 0.5))',
        backgroundWallpaper: `${getSpecificImage(localModuleImports.backgroundImages, 'Ariane').url}`
    },
    {
        id: 2,
        underlayingImage: `url(${getSpecificImage(localModuleImports.changedUnderlayImages, 'TwistedBow').url})`,
        linearGradient: 'linear-gradient(rgba(145, 163, 18, 0.5), rgba(50, 46, 46, 0.5))',
        backgroundWallpaper: `${getSpecificImage(localModuleImports.backgroundImages, 'JungleDiscovery').url}`
    }
];

export const colorHandler = (buttonNumber, prayerState) => {
    if (buttonNumber === 0) {
        if (prayerState === 0) {
            const magePrayObject = {
                ...buttonProps[0],
                underlayingImage: `url(${localModuleImports.protectionPrayerIcons[0].url})`
            }
            return magePrayObject;
        }
        if (prayerState === 1) {
            const magePrayObject = {
                ...buttonProps[0],
                underlayingImage: `url(${localModuleImports.protectionPrayerIcons[1].url})`
            }
            return magePrayObject;
        }
    } else {
        return buttonProps[buttonNumber];
    }
};
