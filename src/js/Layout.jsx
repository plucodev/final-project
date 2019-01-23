import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./views/home.jsx";
import Register from "./views/register.jsx";
import Store from "./store/appContext.jsx";

class Layout extends React.Component {
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

export default Store(Layout);
