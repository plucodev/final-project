import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
// import Home from "../views/home.jsx";
// import HowItWorks from "../views/howItWorks.jsx";

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container">
				<a className="navbar-brand" href="#">
					Final Project
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon" />
				</button>
				<div
					className="collapse navbar-collapse justify-content-end"
					id="navbarNav">
					<ul className="navbar-nav ">
						<li className="nav-item active">
							<Link to="./home" className="nav-link" href="#">
								Home
								<span className="sr-only">(current)</span>
							</Link>
						</li>
						<li className="nav-item">
							<Link to="./how-it-works" className="nav-link">
								How It Works
							</Link>
						</li>
						<li className="nav-item">
							<Link to="./register" className="nav-link" href="#">
								Register
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
