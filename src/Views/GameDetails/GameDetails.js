import React, {useState, useEffect} from "react";
import "./GameDetails.scss";
import Article from "../../Components/Disqus/Disqus";


export function GameDetails() {

	const [game, setgame] = useState([]);

	useEffect(() => {
		fetch("https://api.rawg.io/api/games/resident-evil-2-2019")
			.then(r => r.json())
			.then(data => setgame(data));
	},[]);

 
	
	return (
		<div>
			<div className="container text-center">
			<h1 className="gameName">{game.name}</h1>
			<div className="card singleGameCard">
					<img src={game.background_image} className="card-img singleGameCardimg" alt="..." />
				</div>
					<p className="gameDescription" dangerouslySetInnerHTML={{ __html: game.description }}></p>
					<p>{game.released}</p>
					<p>{game.website}</p>
					<p>Rating: {game.rating}</p>
					<Article />
			</div>
		</div>
	);
}
