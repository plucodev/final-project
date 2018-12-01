import React from "react";
import Home from "../views/home.jsx";
import HowItWorks from "../views/howItWorks.jsx";
import { Link } from "react-router-dom";

const Jumbo = () => {
	return (
		<div className="container mt-3">
			<div className="jumbotron">
				<h1 className="display-3">Title</h1>
				<p className="lead">Body</p>
				<a className="btn btn-primary btn-lg" href="#" role="button">
					Button
				</a>
			</div>
		</div>
	);
};

export default Jumbo;
