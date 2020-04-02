const getState = ({getStore, getActions, setStore}) => {
    return {

        store: {
			userLogin: "",
			userTokens: "",
            gameData: ""
        },

        actions: {
            // loadGameData is used in Home Component
            loadGameData: () => {
                fetch("https://api.rawg.io/api/games?page=2")
				.then(response => response.json())
				.then(data => {
                    const store = getStore()
                    setStore({...store,gameData: data.results})
                })
				.catch((error) => alert('Something went wrong try again later'))
            },

            saveLoginData: (userLoginInformation, tokens) => {
                const store = getStore()
                setStore({
                    ...store,
                    userLogin: userLoginInformation,
                    userTokens: tokens
                })
            },

            logout: () => {
                const store = getStore()
                setStore({
                    ...store,
                    userLogin: "",
                    userTokens: ""
                })
            }

            

        }
    }
};

export default getState;
