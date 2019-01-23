import React, { Component } from "react";

export class Footer extends Component {
	render() {
		return (
			<div className="jumbotron jumbotron-fluid footer mb-0 mt-0 jumbo-footer">
				<div className="container">
					<div className="row text-center">
						<div className="col-md-3">
							<a className="navbar-brand" href="#">
								Final Project
							</a>
						</div>
						<div className="col-md-3">
							<nav className="nav flex-column">
								<a className="nav-link" href="#">
									About Us
								</a>
								<a className="nav-link" href="#">
									Contact Us
								</a>
								<a className="nav-link" href="#">
									FAQs
								</a>
								<a
									className="nav-link"
									href="#"
									tabIndex="-1"
									aria-disabled="true">
									Procedures
								</a>
							</nav>
						</div>

						<div className="col-md-6">
							<p>Stay in touch! Join Our Newsletter!</p>
							<div className="input-group mb-3">
								<input
									type="text"
									className="form-control"
									placeholder="Your Email"
									aria-label="Recipient's username"
									aria-describedby="button-addon2"
								/>
								<div className="input-group-append">
									<button
										className="btn button-email"
										type="button"
										id="button-addon2">
										Subscribe
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="row text-center mt-4">
						<div className="col-md-12 social">
							<i className="fab fa-instagram mr-1" />
							<i className="fab fa-facebook-square mr-1" />
							<i className="fab fa-twitter mr-1" />
						</div>
					</div>
					<div className="row text-center mt-4">
						<div className="col-md-12">
							Copyright © - Florez-Lucano - 2019
						</div>
					</div>
				</div>
			</div>
		);
	}
}
