import React from 'react';
import './UserInformation.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUserAstronaut} from '@fortawesome/free-solid-svg-icons';
import {faSadCry} from '@fortawesome/free-solid-svg-icons';


function UserInformation(props) {

    console.log(props.user)

    return (
        <div>
            <div className="profileUserInfoContainer">
                <div className="avatar">
                    {/* <div>
                        <FontAwesomeIcon icon={faUserAstronaut} style={{fontSize: "35px"}}/>
                    </div> */}
                    <div>
                        {props.user ? props.user.data.username : null}
                    </div>
                </div>
                <div>
                    <FontAwesomeIcon icon={faSadCry} style={{fontSize: "35px"}}/>
                    <p>Work in progress ....</p>
                </div>
            </div>
        </div>
    )
}

export default UserInformation
