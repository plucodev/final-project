import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

export class MainSelector extends React.Component {
	render() {
		return (
			<div className="jumbotron mb-2 mainselector">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<h1 className="display-4 text-center">
								Shopping for Healthcare Services
							</h1>
						</div>
					</div>
					<div className="row">
						<div className="col-md-4 mb-5 text-center">
							<div>
								<i className="fas fa-thumbtack text-muted mr-3" />
								Compare local prices
							</div>
						</div>
						<div className="col-md-4 mb-5 text-center">
							<div>
								<i className="fas fa-hand-holding-usd text-muted mr-3" />
								Save money
							</div>
						</div>
						<div className="col-md-4 mb-5 text-center">
							<div>
								<i className="fas fa-shopping-cart text-muted mr-3" />
								Buy your procedure
							</div>
						</div>
					</div>

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
										Search
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
	}
}

export default withRouter(MainSelector);
