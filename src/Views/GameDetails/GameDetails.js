import React, {useState, useEffect,useContext} from "react";
import "./GameDetails.scss";
import Article from "../../Components/Disqus/Disqus";
import {Context} from "../../Store/appContext";


export function GameDetails(props) {

	const gameToSearch = props.match.params.slug

	const [game, setgame] = useState([]);
	const {store, actions} = useContext(Context);
	const [favCards, setFavCards] = useState([]);
	const [rmvFav, setRmvFav] = useState(favCards);

	const addToFav = val => {
		const newFavs = [...store.favoriteGames];
		newFavs.push(val);
		setFavCards(newFavs);
	};

	// const deleteLabel = val => {
	// 	const newestFavs = [...rmvFav];
	// 	newestFavs.splice(val, 1);
	// 	setFavCards(newestFavs);
	// };

	useEffect(() => {
		fetch(`https://api.rawg.io/api/games/${gameToSearch}`)
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
					<p>{game.released}</p>
					<p>{game.website}</p>
					<p>Rating: {game.rating}</p>
					<Article />
			</div>
		</div>
	);
}
