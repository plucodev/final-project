import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { Context } from "../store/appContext.jsx";

class Search extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<div className="container mt-2">
							<div className="row">
								<div className="col-md-12">
									<div className="input-group mb-3">
										<input
											type="text"
											className="form-control"
											placeholder="Find CT Scan, Ultrasound"
											aria-label="Find Procedures"
											aria-describedby="button-addon2"
											name="user-input"
										/>
										<input
											type="text"
											className="form-control"
											placeholder="Zip Code"
											aria-label="Zip Code"
											aria-describedby="button-addon2"
											name="zipCode-input"
										/>
										<div className="input-group-append">
											<button
												className="btn btn-outline-info"
												onClick={() =>
													actions.searchProcedure(
														document.querySelector(
															"[name=user-input]"
														).value,
														document.querySelector(
															"[name=zipCode-input]"
														).value,
														this.props
													)
												}
												type="button"
												id="button-addon2">
												Search
											</button>
										</div>
									</div>
								</div>
								<div className="col-md-12">
									<p className="lead text-center">
										Enter a procedure name, a zip code or
										both to retrieve a list of procedures.
									</p>
								</div>
							</div>
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}
Search.propTypes = {
	history: PropTypes.object
};

export default withRouter(Search);

// <button
// 												className="btn btn-outline-info"
// 												onClick={() =>
// 													actions.searchProcedures(
// 														document.querySelector(
// 															"[name=user-input]"
// 														).value
// 													)
// 												}
// 												type="button"
// 												id="button-addon2">
// 												Button
// 											</button>
