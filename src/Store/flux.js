import axios from 'axios'


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

            login: async(loginInformation) => {
                try {
                    const tokenRequest = await axios.post('https://games-api-4geeks.herokuapp.com/login', loginInformation)
                    const tokens = tokenRequest.data
                    if (!tokens.token) {return alert(tokens.message)}
                    const header = {Authorization: `Bearer ${tokens.token}`}
                    const requestUserInfo = await axios.get('https://games-api-4geeks.herokuapp.com/user', {headers: header})
                    const store = getStore()
                    setStore({
                        ...store,
                        userLogin: requestUserInfo,
                        userTokens: tokens
                    })
                    return requestUserInfo.data.username
                } catch (error) {
                    alert('Something went wrong please try again later')
                }
            },

            logout: async() => {
                try {
                    const store = await getStore()
                    // console.log(store.userTokens.token)
                    // const header = {Authorization: `Bearer ${store.userTokens.token}`}
                    // await axios.post('https://games-api-4geeks.herokuapp.com/logout', {headers: header})
                    setStore({
                        ...store,
                        userLogin: "",
                        userTokens: ""
                    })
                } catch (error) {
                    alert('Something went wrong please try again later')
                }
            }



        }
    }
};

export default getState;
