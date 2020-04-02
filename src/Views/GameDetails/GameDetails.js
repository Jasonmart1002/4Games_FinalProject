import React, {useState, useEffect} from "react";
import "./GameDetails.scss";
import Article from "../../Components/Disqus/Disqus";




export function GameDetails() {

	const [tasks, setTasks] = useState([]);
	useEffect(() => {
		fetch("https://api.rawg.io/api/games/cyberpunk-2077")
			.then(r => r.json())
			.then(data => setTasks(data));
	});

	return (
		<div>
			<div className="container text-center">
			<div className="card singleGameCard">
					<img src={tasks.background_image} className="card-img singleGameCardimg" alt="..." />
				</div>
					<p>{tasks.description}</p>
					<p>{tasks.released}</p>
					<p>{tasks.website}</p>
					<p>Rating: {tasks.rating}</p>
					<Article />
			</div>
		</div>
	);
}
