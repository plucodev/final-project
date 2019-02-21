import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
// import Home from "../views/home.jsx";
// import HowItWorks from "../views/howItWorks.jsx";
import spain from "../../img/spain.png";
import PropTypes from "prop-types";

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container">
				<Link className="navbar-brand" to="/">
					APOYO
				</Link>
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
						{/*<li className="nav-item active">
							<Link to="/home" className="nav-link" to="#">
								Home
								<span className="sr-only">(current)</span>
							</Link>
						</li>*/}
						<li className="nav-item">
							<Link to="./how-it-works" className="nav-link">
								How It Works
							</Link>
						</li>

						<li className="nav-item dropdown">
							<Link
								className="nav-link dropdown-toggle"
								to="#"
								id="navbarDropdownProcedures"
								role="button"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false">
								Welcome Paolo
							</Link>
							<div className="row">
								<div className="col-sm-4">
									<div className="dropdown-menu">
										<h6 className="dropdown-header">
											Your Profile
										</h6>
										<Link
											to="/dashboard"
											className="dropdown-item">
											Dashboard
										</Link>
										<div className="dropdown-divider" />
										<Link to="#" className="dropdown-item">
											Logout
										</Link>
									</div>
								</div>
							</div>
						</li>
						{/*<Context.Consumer>
							{({ store, actions }) => {
								return (
									<li className="nav-item dropdown">
										<Link
											className="nav-link dropdown-toggle"
											to="#"
											id="navbarDropdown"
											role="button"
											data-toggle="dropdown"
											aria-haspopup="true"
											aria-expanded="false">
											Log In / Sign In
										</Link>

										<div className="dropdown-menu">
											<form className="px-4 py-3">
												<div className="form-group">
													<label htmlFor="exampleDropdownFormEmail1">
														Email address
													</label>
													<input
														type="email"
														className="form-control"
														id="exampleDropdownFormEmail1"
														placeholder="email@example.com"
														name="email"
													/>
												</div>
												<div className="form-group">
													<label htmlFor="exampleDropdownFormPassword1">
														Password
													</label>
													<input
														type="password"
														className="form-control"
														id="exampleDropdownFormPassword1"
														placeholder="Password"
														name="password"
													/>
												</div>
												<div className="form-group">
													<div className="form-check">
														<input
															type="checkbox"
															className="form-check-input"
															id="dropdownCheck"
														/>
														<label
															className="form-check-label"
															htmlFor="dropdownCheck">
															Remember me
														</label>
													</div>
												</div>
												<button
													type="submit"
													className="btn btn-info"
													onClick={() =>
														actions.signInUserClick(
															document.querySelector(
																"[name=email]"
															).value,
															document.querySelector(
																"[name=password]"
															).value,
															this.props.history
														)
													}>
													Log In
												</button>
											</form>
											<div className="dropdown-divider" />
											<Link
												className="dropdown-item"
												to="/sign-up">
												New around here? Sign up
											</Link>
											<Link
												className="dropdown-item"
												to="#">
												Forgot password?
											</Link>
										</div>
									</li>
								);
							}}
						</Context.Consumer>*/}

						<li className="nav-item active">
							<Link to="/cart" className="nav-link">
								<i className="fab fa-opencart" />
							</Link>
							<span className="sr-only" />
						</li>
						<Context.Consumer>
							{({ store, actions }) => {
								let cartTotal = 0;
								store.cart.forEach((item, index, history) => {
									let product = store.procedures_test.find(
										products => {
											return (
												products.CPT_Code ===
												item.CPT_Code
											);
										}
									);

									cartTotal += product.price;
								});
								return (
									<div className="text-wrap">
										<span className="small badge badge-success">
											{"$ " + cartTotal}
										</span>
									</div>
								);
							}}
						</Context.Consumer>

						<li className="nav-item active">
							<Link to="/cart" className="nav-link" id="flag">
								<img src={spain} alt="..." className="img" />
							</Link>
							<span className="sr-only" />
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
Navbar.propTypes = {
	history: PropTypes.object
};
export default Navbar;

// <li className="nav-item dropdown">
// 							<Link
// 								to="#"
// 								className="nav-link dropdown-toggle"
// 								id="navbarDropdown">
// 								Log In / Sign Up
// 							</Link>
// 							<div className="dropdown-menu">
// 								<form className="px-4 py-3">
// 									<div className="form-group">
// 										<label htmlFor="exampleDropdownFormEmail1">
// 											Email address
// 										</label>
// 										<input
// 											type="email"
// 											className="form-control"
// 											id="exampleDropdownFormEmail1"
// 											placeholder="email@example.com"
// 										/>
// 									</div>
// 									<div className="form-group">
// 										<label htmlFor="exampleDropdownFormPassword1">
// 											Password
// 										</label>
// 										<input
// 											type="password"
// 											className="form-control"
// 											id="exampleDropdownFormPassword1"
// 											placeholder="Password"
// 										/>
// 									</div>
// 									<div className="form-group">
// 										<div className="form-check">
// 											<input
// 												type="checkbox"
// 												className="form-check-input"
// 												id="dropdownCheck"
// 											/>
// 											<label
// 												className="form-check-label"
// 												htmlFor="dropdownCheck">
// 												Remember me
// 											</label>
// 										</div>
// 									</div>
// 									<button
// 										type="submit"
// 										className="btn btn-primary">
// 										Sign in
// 									</button>
// 								</form>
// 							</div>
// 						</li>
// <li class="dropdown">
// 	            <a href="#" class="dropdown-toggle" data-toggle="dropdown">Three Column <b class="caret"></b></a>
// 	            <ul class="dropdown-menu multi-column columns-3">
// 		            <div class="row">
// 			            <div class="col-sm-4">
// 				            <ul class="multi-column-dropdown">
// 					            <li><a href="#">Action</a></li>
// 					            <li><a href="#">Another action</a></li>
// 					            <li><a href="#">Something else here</a></li>
// 					            <li class="divider"></li>
// 					            <li><a href="#">Separated link</a></li>
// 					            <li class="divider"></li>
// 					            <li><a href="#">One more separated link</a></li>
