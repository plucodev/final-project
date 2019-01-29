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
							<Link
								to="./procedures"
								className="nav-link"
								href="#">
								Procedures
							</Link>
						</li>

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
										className="btn btn-info">
										Log In
									</button>
								</form>
								<div className="dropdown-divider" />
								<Link className="dropdown-item" to="/sign-up">
									New around here? Sign up
								</Link>
								<Link className="dropdown-item" to="#">
									Forgot password?
								</Link>
							</div>
						</li>

						<li className="nav-item active">
							<Link to="/cart" className="nav-link">
								<i className="fab fa-opencart" />
							</Link>
							<span className="sr-only" />
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
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
