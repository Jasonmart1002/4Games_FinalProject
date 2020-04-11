import React from 'react';
import "./GameInstance.scss";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSadCry} from '@fortawesome/free-solid-svg-icons';


function GameInstance(props) {

    const imgToDisplay = props.background_img
        ? <img src={props.background_img} alt="Smiley face" height="100%" width="100%"/>
        : <FontAwesomeIcon icon={faSadCry} style={{textAlign: "center"}} />
    return (
        <div className="gameInstanceContainer">
            <div className="gameImageContainer">
                {imgToDisplay}
            </div>
        </div>
    )
}

export default GameInstance
