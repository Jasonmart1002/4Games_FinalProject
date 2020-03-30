import React, {useState, useContext} from "react";
import "./TopicTable.scss";
import {Link} from "react-router-dom";
import {Context} from "../../Store/appContext";

export function TopicTable() {
    const [games,
        setGames] = useState([null]);
    const {store, actions} = useContext(Context);
    const [singleGameName,
        setSingleGameName] = useState(null);
    const [singleGamePic,
        setSingleGamePic] = useState(null);

    return (
        <div className="tableContainer">
            <h2 className="text-center">Games Of The Day</h2>
            <div className="gameCardBox">
                {!store.games
                    ? "Loading..."
                    : store
                        .games
                        .map((game, index) => (
                            <Link to="/game_details" key={index}>
                                <div className="col mr-4" key={index}>
                                    <div
                                        className="card gameCard text-center"
                                        onClick={() => {
                                        setSingleGameName(game.name);
                                        setSingleGamePic(game.background_image)
                                    }}>
                                        <img
                                            src={game.background_image}
                                            className="card-img-top gameCardImg"
                                            alt="..."/>
                                        <div className="card-body">
                                            <h5 className="card-title">{game.name}</h5>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
            </div>
        </div>
    );
}
