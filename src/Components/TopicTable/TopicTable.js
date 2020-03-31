import React, {useContext} from "react";
import "./TopicTable.scss";
import {Link} from "react-router-dom";
import {Context} from "../../Store/appContext";
import GameCard from "./GameCard/GameCard"

export function TopicTable() {

    const {store} = useContext(Context);

    const gameList = !store.games
        ? "Loading..."
        : store
            .games
            .map(game => {
                return <Link to="/game_details" key={game.id}>
                    <GameCard 
                        gameId={game.id}
                        imageToDisplay={game.background_image}
                        clip={game.clip.clip} 
                        gameName={game.name}/>
                </Link>
            })

            
            return (
                <div className="tableContainer">
                    <h2 className="text-center">Games Of The Day</h2>
                    <div className="gameCardBox">
                        {gameList}
                    </div>
                </div>
            );
        }