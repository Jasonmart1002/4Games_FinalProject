import React, {useContext, useEffect} from "react";
import "./Profile.scss";
import {Context} from "../../Store/appContext";

export function Profile(props) {

    const {store} = useContext(Context);
    const {userLogin} = store
    const {history} = props

    // useEffect(() => {
    //     if (!userLogin) {
    //         history.push('/')
    //     }
	// },[userLogin, history])
	
	

    return (
		<div className="userProfileMain">
			<div className="profileContainer">
				<div className="leftContainer">
				</div>
				<div className="rightContainer">
					<div className="favoriteGame"></div>
					<div className="newRelease"></div>
				</div>
			</div>
		</div>
	)
}
