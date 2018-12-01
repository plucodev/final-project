import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./views/home.jsx";
import HowItWorks from "./views/howItWorks.jsx";
import Register from "./views/register.jsx";
// import Login from "./views/login.jsx";
// import Signup from "./views/signup.jsx";

export class Layout extends React.Component {
	render() {
		return (
			<div>
				<BrowserRouter>
					<div>
						<Switch>
							<Route exact path="/" component={Home} />
							<Route exact path="/home" component={Home} />
							<Route
								exact
								path="/how-it-works"
								component={HowItWorks}
							/>
							<Route
								exact
								path="/register"
								component={Register}
							/>
						</Switch>
					</div>
				</BrowserRouter>
			</div>
		);
	}
}
