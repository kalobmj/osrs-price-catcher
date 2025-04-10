import React from "react";
import ColorwayButton from "../atoms/ColorwayButton";
import { colorHandler } from "../../utils/colorHandler";

export default function Footer({ changeUnderlayBackground, prayer, changePrayer }) {
    const buttonIndexArray = [0, 1, 2];

    const buttonElements = buttonIndexArray.map(buttonNumber => {
        if (buttonNumber === 0) {
            const ourButtonInfo = colorHandler(buttonNumber, prayer)
            const localHandler = () => {
                changeUnderlayBackground(ourButtonInfo)
                changePrayer();
            }
            return <ColorwayButton
                buttonIndex={buttonNumber}
                helper={() => localHandler()}
                key={ourButtonInfo.id}
            />
        } else {
            const ourButtonInfo = colorHandler(buttonNumber);
            const localHandler = () => {
                changeUnderlayBackground(ourButtonInfo)
            }
            return <ColorwayButton
                buttonIndex={buttonNumber}
                helper={() => localHandler()}
                key={ourButtonInfo.id}
            />
        }
    });

    return (
        <div className="footer-container">
            {buttonElements}
        </div>
    )
};