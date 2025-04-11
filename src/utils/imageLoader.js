import { randomNumber, randomNumberExcluding } from "./randomNumber";

// function to return random image
export function getRandomImage(globCall, stateId) {
    let ourRandomNumber;

    console.log({globCall})

    if (stateId != undefined) {
        ourRandomNumber = randomNumberExcluding(stateId, Object.keys(globCall).length);
        const foundRandomImage = Object.entries(globCall).find(image => {
            return image.includes(String(ourRandomNumber))
        });
        console.log({foundRandomImage})
        console.log(foundRandomImage[0])
        console.log(foundRandomImage[1])
        console.log(foundRandomImage[1].url)
        return foundRandomImage[1];
    } else {
        ourRandomNumber = randomNumber(Object.keys(globCall).length)
        const foundRandomImage = Object.entries(globCall).find(image => {
            return image.includes(String(ourRandomNumber))
        });
        console.log({foundRandomImage})
        console.log(foundRandomImage[0])
        console.log(foundRandomImage[1])
        console.log(foundRandomImage[1].url)
        return foundRandomImage[1];
    };
};

// function to grab image based on its specific url
export function getSpecificImage(globCall, match) {
    const foundImage = globCall.find(image => {
        let imageUrl = image.url
        let urlLastIndex = imageUrl.lastIndexOf('/');
        let urlFinal = '';

        // for loop to find name of asset regardless of dev or delpoy
        for (let i=urlLastIndex+1; i<imageUrl.length; i++) {
            if (imageUrl[i] === '.' || imageUrl[i] === '-') {
                break
            } else {
                urlFinal += imageUrl[i]
            }
        }
        console.log({imageUrl})
        console.log({urlLastIndex})
        console.log('urlFinal', urlFinal)

        return urlFinal === match
    });

    return foundImage;
};