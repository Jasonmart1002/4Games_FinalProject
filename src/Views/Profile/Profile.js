import React, {useContext, useEffect, useState} from "react";
import "./Profile.scss";
import {Context} from "../../Store/appContext";
import GameInstance from "./GameInstance/GameInstance"
import axios from 'axios';

export function Profile(props) {

    const {store} = useContext(Context);
    const {userLogin} = store
    const {history} = props

	const [favoriteGameInfo, setFavoriteGameInfo] = useState({favoriteGameData: []})

    // useEffect(() => {
    //     if (!userLogin) {
    //         history.push('/')
    //     }
	// },[userLogin, history])

	useEffect(() => {
		const fetchDataOfFavoriteGames = async () => {
			try {
				if(userLogin) {
					const favoriteGameRequestData = []
					const arrOfFavoriteGames = userLogin.data.favorite_games;
					for (let game of arrOfFavoriteGames) {
						const request = await axios.get(`https://api.rawg.io/api/games/${game.game_url_id}`);
						favoriteGameRequestData.push(request.data)
					}
					setFavoriteGameInfo({favoriteGameData: favoriteGameRequestData});
				}
			} catch (error) {
				alert("Something went wrong please try again to log in again");
				history.push('/')
			}
		}
		fetchDataOfFavoriteGames() 
	}, [userLogin, history])

	const gameToDisplay = favoriteGameInfo.favoriteGameData.map( game => {
		return <GameInstance />
	})


    return (
		<div className="userProfileMain">
			<div className="profileContainer">
				<div className="leftContainer">
					<GameInstance />
				</div>
				<div className="rightContainer">
					<div className="userInfo">
						user info
					</div>
					<div className="alert">
						alert
					</div>
				</div>
			</div>
		</div>
	)
}
