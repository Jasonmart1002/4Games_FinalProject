import React, {useContext, useState, useEffect} from "react";
import "./Profile.scss";
import {Context} from "../../Store/appContext";
import axios from 'axios';
import GameInstance from "./GameInstance/GameInstance";
import StoreOptions from "./StoreOptions/StoreOptions";
import UserInformation from "./UserInformation/UserInformation";

export function Profile(props) {

    const {store} = useContext(Context);
    const {favoriteGameInfo, userLogin} = store;
    const {history} = props

    useEffect(() => {
        if (!userLogin) {
            history.push('/')
        }
    }, [userLogin, history])

    const [favoriteGamesToDisplay,
        setFavoriteGameToDisplay] = useState(
        <div>Select a game to follow store updates</div>
    )
    const [storeDeals,
        setStoreDeals] = useState({
        messageToDisplay: <div>Please select a game to search for deals</div>
    })

    const fetchStoreData = async(game) => {
        try {
            setStoreDeals({spinner: (
                    <div className="loaderStoreContainer">
                        <div className="loaderStore"></div>
                    </div>
                )})
            const key = process.env.REACT_APP_IS_THERE_ANY_DEAL;
            const request = await axios.get(`https://api.isthereanydeal.com/v01/search/search/?key=${key}&q=${game.slug}&limit=20&region=us&country=US&shops=steam,amazonus`)
            setStoreDeals({gameTitle: game.name, gameBackGround: game.background_image, gameStoreData: request.data.data.list, gameSlug: game.slug});
        } catch (error) {
            alert("Something went wrong please try agin later")
        }
    }

    useEffect(() => {
        if (favoriteGameInfo.length) {
            const gameToDisplay = favoriteGameInfo.map(game => {
                return (
                    <div key={game.id} onClick={() => fetchStoreData(game)}>
                        <GameInstance id={game.id} background_img={game.background_image}/>
                    </div>
                )
            })
            setFavoriteGameToDisplay(gameToDisplay)
        } else if (userLogin) {
            if (userLogin.data.favorite_games.length) {
                setFavoriteGameToDisplay(
                    <div className="loaderStore"></div>
                )
            }
        }
    }, [favoriteGameInfo, userLogin])

    let storeDetailsToDisplay = ''
    if (storeDeals.messageToDisplay) {
        storeDetailsToDisplay = storeDeals.messageToDisplay
    } else if (storeDeals.spinner) {
        storeDetailsToDisplay = storeDeals.spinner
    } else {
        storeDetailsToDisplay = <StoreOptions storeDeals={storeDeals}/>
    }

    return (
        <div className="userProfileMain">
            <div className="profileContainer">
                <div className="leftContainer">
                    {favoriteGamesToDisplay}
                </div>
                <div className="rightContainer">
                    <div className="userInfo">
                        <UserInformation user={userLogin}/>
                    </div>
                    <div className="storeDeals">
                        {storeDetailsToDisplay}
                    </div>
                </div>
            </div>
        </div>
    )
}
