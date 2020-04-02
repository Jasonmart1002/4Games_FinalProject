const getState = ({getStore, getActions, setStore}) => {
    return {

        store: {
			userLogin: [],
			userTokens: [],
            gameData: []
        },

        actions: {
            // find url to get game by Topic
            loadSomeData: () => {
                fetch("https://api.rawg.io/api/games?page=3")
                    .then(response => response.json())
                    .then(data => setStore({gameData: data.results}))
                    .catch((error) => console.log(error))
            },

            saveLoginData: (userLoginInformation, tokens) => {
				console.log('Im here')
                // const store = getStore()
                // setStore({
                //     ...store,
                //     userLogin: userLoginInformation,
                //     userTokens: tokens
                // })
            }

        }
    }
};

export default getState;
