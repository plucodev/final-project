import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ScrollToTop } from "./component/functional/scrollToTop.jsx";
import Home from "./views/home.jsx";
import Store from "./store/appContext.jsx";
import Navbar from "./component/Navbar.jsx";
// import { Footer } from "./component/Footer.jsx";

//create your first component
class Layout extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/home" component={Home} />

						<Route render={() => <h1>Not found!</h1>} />
					</Switch>
				</ScrollToTop>
			</BrowserRouter>
		);
	}
}

export default Store(Layout);
