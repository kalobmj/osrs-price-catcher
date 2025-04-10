import { randomNumber, randomNumberExcluding } from "./randomNumber";

// function to return random image
export function getRandomImage(globCall, stateId) {
    let ourRandomNumber;

    if (stateId != undefined) {
        ourRandomNumber = randomNumberExcluding(stateId, Object.keys(globCall).length);
        const foundRandomImage = Object.entries(globCall).find(image => {
            return image.includes(String(ourRandomNumber))
        });
        return foundRandomImage[1];
    } else {
        ourRandomNumber = randomNumber(Object.keys(globCall).length)
        const foundRandomImage = Object.entries(globCall).find(image => {
            return image.includes(String(ourRandomNumber))
        });
        return foundRandomImage[1];
    };
};

// function to grab image based on its specific url
export function getSpecificImage(globCall, match) {
    const foundImage = globCall.find(image => {
        return image.url === match
    });

    return foundImage;
};