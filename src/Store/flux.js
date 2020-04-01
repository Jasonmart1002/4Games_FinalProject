const getState = ({ getStore, getActions, setStore }) => {
	return {

		store: {
			userLogin: {},
			gameData:[],
		},

		actions: {
			// find url to get game by Topic 
			loadSomeData: () => {
				fetch("https://api.rawg.io/api/games?page=2")
					.then(response => response.json())
					.then(data => setStore({gameData: data.results}))
					.catch((error) => console.log(error));
			    },
			}
		}
	};

export default getState;
