import React from 'react';
import "./Media.scss";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faYoutube} from '@fortawesome/free-brands-svg-icons';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';

function Media(props) {

    return (
        <div className="mediaContainer">
            <a className="youtubeIcon" target="_blank" rel="noopener noreferrer" href={`https://www.youtube.com/results?search_query=>${props.game_name}`}>
                <FontAwesomeIcon icon={faYoutube}/>
            </a>
            <a className="facebookIcon" target="_blank" rel="noopener noreferrer" href={`https://www.facebook.com/search/top/?q=${props.game_name} game`}>
                <FontAwesomeIcon icon={faFacebook}/>
            </a>
        </div>
    )
}

export default Media