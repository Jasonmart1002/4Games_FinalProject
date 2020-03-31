import React, {useState} from 'react';
import './GameCard.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faInfo} from '@fortawesome/free-solid-svg-icons';
import ReactPlayer from 'react-player';

function GameCard(props) {

    const [userView,
        setUserView] = useState({contentToDisplay: <img
            src={props.imageToDisplay}
            className="gameCardImg"
            alt={`image if ${props.gameName}`}/>})

    const handleMouseEvent = (mouseAction) => {
        if (mouseAction) {
            setUserView({
                ...userView,
                contentToDisplay: <ReactPlayer
                        url= {props.clip}
                        className="videoPlayer"
                        width='300px'
                        height='200px'
                        playing
                        loop
                        volume={0}
                        muted/>
            })
        } else {
            setUserView({
                ...userView,
                contentToDisplay: <img
                        src={props.imageToDisplay}
                        className="gameCardImg"
                        alt={`image if ${props.gameName}`}/>
            })
        }
    }

    return (
        <div
            className="cardContainer"
            onMouseEnter={() => handleMouseEvent(true)}
            onMouseLeave={() => handleMouseEvent(false)}>
            <div className="gameCardInformationContainer">
                <div className="gameCardInnerInformation">
                    <FontAwesomeIcon icon={faInfo} className="infoIcon"/>
                    <h1>Hey!</h1>
                    <p>This is a paragraph</p>
                </div>
            </div>
            <div>
                <div className="card gameCard">
                    {userView.contentToDisplay}
                </div>
            </div>
        </div>
    )
}

export default GameCard
