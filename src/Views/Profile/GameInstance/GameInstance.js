import React from 'react';
import "./GameInstance.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { faSteamSymbol } from '@fortawesome/free-brands-svg-icons';

function GameInstance(props) {




    return (
        <div>
            <div className="deleteGameBg"></div>
            <div className="deleteGameFromFavorites">
                <FontAwesomeIcon icon={faTimesCircle} className="deleteIcon"/>
            </div>
            <div className="gameInstanceContainer">

            </div>
            <div className="storeIconContainer">
                <p>$ 2.00</p>
                <FontAwesomeIcon icon={faSteamSymbol} className="steamIcon"/>
            </div>
        </div>
    )
}

export default GameInstance
