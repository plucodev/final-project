import React from "react";
import Home from "../views/home.jsx";
import HowItWorks from "../views/howItWorks.jsx";
import { Link } from "react-router-dom";
import rigoImage from "../../img/014-hospital.png";

const Jumbo = () => {
	return (
		<div className="container-fluid mt-3">
			<div className="jumbotron searchBox">
				<div className="row">
					<div className="h1 col-lg-12 text-center image-home">
						<img src={rigoImage} />
					</div>
				</div>

				<ul
					className="nav nav-pills mb-3 "
					id="pills-tab"
					role="tablist">
					<li className="nav-item">
						<a
							className="nav-link active mr-2"
							id="pills-procedures-tab"
							data-toggle="pill"
							href="#pills-home"
							role="tab"
							aria-controls="pills-home"
							aria-selected="true">
							<i className="fas fa-notes-medical mr-2" />
							Find Procedures
						</a>
					</li>
					<li className="nav-item">
						<a
							className="nav-link"
							id="pills-providers-tab"
							data-toggle="pill"
							href="#pills-profile"
							role="tab"
							aria-controls="pills-profile"
							aria-selected="false">
							<i className="fas fa-user-md mr-2" />
							Find Providers
						</a>
					</li>
				</ul>
				<div className="tab-content" id="pills-tabContent">
					<div
						className="tab-pane fade show active"
						id="pills-home"
						role="tabpanel"
						aria-labelledby="pills-home-tab">
						<div className="input-group input-group-lg mb-3">
							<input
								type="text"
								className="form-control input-search"
								placeholder="Find CT Scan, Ultrasound"
								aria-label="Find Procedures"
								aria-describedby="button-addon2"
							/>
							<input
								type="text"
								className="form-control input-search"
								placeholder="Zip Code"
								aria-label="Zip Code"
								aria-describedby="button-addon2"
							/>
							<div className="input-group-append input-group-lg">
								<button
									className="btn btn-outline-secondary"
									type="button"
									id="button-searchProcedures">
									Button
								</button>
							</div>
						</div>
					</div>
					<div
						className="tab-pane fade"
						id="pills-profile"
						role="tabpanel"
						aria-labelledby="pills-profile-tab">
						<div className="input-group input-group-lg mb-3">
							<input
								type="text"
								className="form-control input-search"
								placeholder="Find Dr.John Doe, Diagnostic Center"
								aria-label="Find Providers"
								aria-describedby="button-addon2"
							/>
							<input
								type="text"
								className="form-control input-search"
								placeholder="Zip Code"
								aria-label="Zip Code"
								aria-describedby="button-addon2"
							/>
							<div className="input-group-append input-group-lg">
								<button
									className="btn btn-outline-secondary"
									type="button"
									id="button-searchProviders">
									Search
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Jumbo;
