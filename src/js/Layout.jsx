import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./views/home.jsx";
import Register from "./views/register.jsx";
import Store from "./store/appContext.jsx";
import How from "./views/how.jsx";
import Procedures from "./views/procedures.jsx";
import SignUp from "./views/signUp.jsx";
import ScrollToTop from "./component/functional/scrollToTop.jsx";
import Navbar from "./component/Navbar.jsx";
import { Footer } from "./component/Footer.jsx";
import { Cart } from "./views/cart.jsx";
import { Checkout } from "./views/checkout.jsx";

class Layout extends React.Component {
	render() {
		return (
			<div>
				<BrowserRouter>
					<ScrollToTop>
						<Navbar />
						<Switch>
							<Route exact path="/" component={Home} />
							<Route exact path="/home" component={Home} />
							<Route exact path="/how-it-works" component={How} />
							<Route exact path="/sign-up" component={SignUp} />
							<Route exact path="/cart" component={Cart} />
							<Route
								exact
								path="/checkout"
								component={Checkout}
							/>

							<Route
								exact
								path="/procedures"
								component={Procedures}
							/>
						</Switch>
						<Footer />
					</ScrollToTop>
				</BrowserRouter>
			</div>
		);
	}
}

export default Store(Layout);
