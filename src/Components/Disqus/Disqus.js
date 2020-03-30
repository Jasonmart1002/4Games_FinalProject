import React, { Component } from "react";
import Disqus from "disqus-react";
import "./Disqus.scss";

export default class Article extends Component {
	render() {
		const disqusShortName = "finalProject-3"; //found in your Disqus.com dashboard
		const disqusConfig = {
			url: "https://3000-f35affae-5763-4ad0-b985-2408c104379b.ws-us02.gitpod.io/", //this.props.pageUrl
			identifier: "article-id", //this.props.uniqueId
			title: "Title of Your Article" //this.props.title
		};

		return (
			<div className="article-container">
				<h1>League Of Legends</h1>

				<p>Talk about this game!</p>

				<Disqus.DiscussionEmbed shortName={disqusShortName} config={disqusConfig} />
			</div>
		);
	}
}
