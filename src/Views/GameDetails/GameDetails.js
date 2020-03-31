import React from "react";
import "./GameDetails.scss";
import Article from "../../Components/Disqus/Disqus";




export function GameDetails() {

	return (
		<div>
			<div className="container text-center">
				<div className="card singleGameCard">
					<img src='https://gameranx.com/wp-content/uploads/2017/03/Cyberpunk-2077-4K-Wallpaper-3.jpg' className="card-img singleGameCardimg" alt="..." />
					<div className="card-img-overlay">{/* <h5 className="card-title">{singleGameName}</h5> */}</div>
				</div>
				<p>
					Be quiet! And the hat. Shes a witch! Shut up! Well, we did do the nose. You cant expect to wield
					supreme power just cause some watery tart threw a sword at you! Oh, ow! Shut up! I dont want to talk
					to you no more, you empty-headed animal food trough water! I fart in your general direction! Your
					mother was a hamster and your father smelt of elderberries! Now leave before I am forced to taunt
					you a second time! I dont want to talk to you no more, you empty-headed animal food trough water! I
					fart in your general direction! Your mother was a hamster and your father smelt of elderberries! Now
					leave before I am forced to taunt you a second time! You dont vote for kings. Why do you think that
					she is a witch? Shut up! The Knights Who Say Ni demand a sacrifice! I have to push the pram a lot.
					Ni! Ni! Ni! Ni! Ah, now we see the violence inherent in the system! Camelot! Ni! Ni! Ni! Ni! Look,
					my liege! Shut up! Look, my liege!
				</p>
				<Article />
			</div>
		</div>
	);
}
