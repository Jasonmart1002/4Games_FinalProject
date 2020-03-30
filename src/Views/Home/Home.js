import React from "react";
import "./Home.scss";

import { WelcomeJumbo } from "../../Components/WelcomeJumbo/WelcomeJumbo";
import { TopicTable } from "../../Components/TopicTable/TopicTable";

export const Home = () => (
	<div>
		<WelcomeJumbo />
		<TopicTable />
	</div>
);
