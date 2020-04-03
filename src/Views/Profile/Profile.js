import React, {useContext, useEffect} from "react";
import "./Profile.scss";
import GameCard from "../../Components/TopicTable/GameCard/GameCard"
import {Link} from "react-router-dom";
import {Context} from "../../Store/appContext";

export function Profile(props) {



	const {store} = useContext(Context);
	const {userLogin} = store
	const {history} = props

	useEffect(() => {
		if(!userLogin){
			history.push('/')
		}
	}, [userLogin,history])


    const favoriteList = !store.favoriteGames
        ? "Loading..."
        : store
            .favoriteGames
            .map(game => {
                return <Link to="/game_details" key={game.id}>
                    <GameCard 
                        gameId={game.id}
                        imageToDisplay={game.background_image}
                        clip={game.clip.clip} 
                        gameName={game.name}
                        releasedDay={game.released}
                        rating={game.rating}
                        ratingCount={game.ratings_count}
                        suggestionsCount={game.suggestions_count}/>
                </Link>
			})
			
	return (
		<div>
			<div className="card profileBox text-center align-items-center pt-3 mb-4 mx-auto">
				<div className="card-header">User Name</div>
				<img
					src="https://cdn.vox-cdn.com/thumbor/zSmSMeiUygGb3OYcT_SgAvNXfmA=/0x47:836x604/1400x1400/filters:focal(0x47:836x604):format(png)/cdn.vox-cdn.com/uploads/chorus_image/image/29978345/1912315_10152052414208719_1792210132_n.0.png"
					className="card-img-top profilePic"
					alt="..."
				/>
				<div className="card-body">
					<p className="card-text">
						User about me Be quiet! And the hat. Shes a witch! Shut up! Well, we did do the nose. You cant
						expect to wield supreme power just cause some watery tart threw a sword at you! Oh, ow! Shut up!
					</p>
				</div>
			</div>
			<div className="tableContainer">
                    <div className="gameCardBox">
                        {favoriteList}
                    </div>
                </div>
		</div>
	);
}
