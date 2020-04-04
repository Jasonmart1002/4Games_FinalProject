import React, {useContext, useEffect} from "react";
import "./Profile.scss";
import {Context} from "../../Store/appContext";

export function Profile(props) {

    const {store} = useContext(Context);
    const {userLogin} = store
    const {history} = props

    useEffect(() => {
        if (!userLogin) {
            history.push('/')
        }
	},[userLogin, history])
	
    return (
		<div className="userProfileMain">
			<div className="profileContainer">
				<div className="leftContainer">
					user favoriteGame
				</div>
				<div className="rightContainer">
					<div className="favoriteGame">
						user info
					</div>
					<div className="newRelease">
						message
					</div>
				</div>
			</div>
		</div>
	)
}
