import React, {useState, useEffect} from "react";
import "./GameDetails.scss";
import Article from "../../Components/Disqus/Disqus";
import StarRatings from 'react-star-ratings';
import ReactPlayer from 'react-player';
import FollowButton from "../../Components/FollowButton/FollowButton";
import Media from "../../Components/Youtube/Media";

export function GameDetails(props) {

    const gameToSearch = props.match.params.slug;
    const [game,
        setGame] = useState([]);
    const [userView,
        setUserView] = useState({contentToDisplay: (
            <div className="spinnerContainer">
                <div className="loader_3"></div>
            </div>
        )})
        
    const updateState = (data) => {
        setGame(data)
        if (!data.clip) {
            return setUserView({contentToDisplay: (<img
                src={data.background_image}
                className="card-img gameCardImg"
                alt={data.name}/>)})
        }
        setUserView({contentToDisplay: (<ReactPlayer
            url={data.clip.clip}
            width='100%'
            height='100%'
            controls
            loop
            playing
            volume={0}/>)}) //set up to 0.002 when finish development
    }

    useEffect(() => {
        fetch(`https://api.rawg.io/api/games/${gameToSearch}`)
            .then(response => response.json())
            .then(data => updateState(data))
    }, [gameToSearch]);

    return (
        <div className="gameDetailsComponent">
            <div className="gameDetailsMain">
                <div className="detailsContainer">
                    <div className="leftContainer">
                        <div className="gameDetailsVideo">
                            {userView.contentToDisplay}
                        </div>
                        <div className="gameDetailsFollowButtonContainer">
                                <Media game_name={game.name}/>
                                <FollowButton game_id={game.id} game_name={game.name} />
                        </div>
                        <div className="disqusContainer">
                            <div className="disqus">
                                <Article articleId ={game.slug} articleTitle={game.name}/>
                            </div>
                        </div>
                    </div>
                    <div className="rightContainer">
                        <div className="description">
                            <div>
                                <h2 className="gameName">{game.name}</h2>
                            </div>
                            <div className="gameDetailsStarRating">
                                <StarRatings
                                    rating={game.rating}
                                    starDimension="17px"
                                    starSpacing="3px"
                                    starEmptyColor="rgba(153, 153, 153, 0.568)"
                                    starRatedColor="rgb(253, 204, 13)"/>
                            </div>
                            <div className="gameDescription">
                                <p
                                    dangerouslySetInnerHTML={{
                                    __html: game.description
                                }}></p>
                                <div className="descriptionDetails">
                                    <p className="detailTxt">Release Date: {game.released}</p>
                                    <a
                                        href={game.website}
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        className="detailTxt">{game.website}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
