import React, {useState, useEffect,useContext} from "react";
import "./GameDetails.scss";
import Article from "../../Components/Disqus/Disqus";
import {Context} from "../../Store/appContext";


export function GameDetails(props) {

	const gameToSearch =props.match.params.slug;
	const [game, setGame] = useState([]);
	const {store, actions} = useContext(Context);
	const [favCards, setFavCards] = useState([]);

	const addToFav = val => {
		const newFavs = [...store.favoriteGames];
		newFavs.push(val);
		setFavCards(newFavs);
	};

	useEffect(() => {
		fetch(`https://api.rawg.io/api/games/${gameToSearch}`)
			.then(r => r.json())
			.then(data => setGame(data));
	},[]);

 
	
	return (
		<div>
			<div className="container text-center">
			<h1 className="gameName">{game.name}</h1>
			<div className="card singleGameCard">
					<img src={game.background_image} className="card-img singleGameCardimg" alt="..." />
				</div>
				<button
					type="button"
					onClick={() => {
						addToFav(game);
						console.log({ favCards });
					}}
					className="btn btn-primary btn-sm">
					Favorite
				</button>

					<p className="gameDescription" dangerouslySetInnerHTML={{ __html: game.description }}></p>
					<p className="detailTxt">Release Date: {game.released}</p>
					<p className="detailTxt">Website: {game.website}</p>
					<p className="detailTxt">Rating: {game.rating}</p>

					<Article />
			</div>
		</div>
	);
}
