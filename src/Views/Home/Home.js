import React, {useContext, useEffect} from "react";
import "./Home.scss";

import { WelcomeJumbo } from "../../Components/WelcomeJumbo/WelcomeJumbo";
import { TopicTable } from "../../Components/TopicTable/TopicTable";
import {Context} from "../../Store/appContext";


export const Home = () => {

    const {actions, store} = useContext(Context);
	const{loadGameData} = actions;

	useEffect(() => {
        loadGameData()
    },[loadGameData])


	return (
	<div>
		<WelcomeJumbo user={store.userLogin}/>
		<TopicTable />
	</div>)
};
