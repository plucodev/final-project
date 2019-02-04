import React from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.jsx";
import { Link } from "react-router-dom";

class ProcedureCard extends React.Component {
	constructor() {
		super();
		this.state = {
			// initialize your state
		};
	}

	render() {
		return (
			<div className="container">
				<ul className="list-group">
					<Context.Consumer>
						{({ store, actions }) => {
							return store.procedures.map((item, index) => {
								return (
									<li
										className="list-group-item proc_card mb-2"
										key={index}>
										<div className="row w-100">
											<div className="col-8 col-sm-6 col-md-9 text-center text-sm-left">
												{/*<Link to={"/single-card/" + index}><label className="name lead" style={{ cursor: "pointer"}}>{item.first_name}</label></Link>*/}
												<div className="row">
													<div className="col-12">
														<h1 className="proc_name">
															<Link
																to={
																	"/procedure/" +
																	item.id
																}>
																<label
																	style={{
																		cursor:
																			"pointer"
																	}}>
																	{item.name +
																		" "}
																</label>
															</Link>
														</h1>
													</div>
												</div>
												<div className="row">
													<div className="col-12">
														{item.description}
													</div>
												</div>
												<br />
												<div className="row">
													<div className="col-12">
														<i className="fas fa-apple-alt text-muted mr-3" />
														<span className="text-muted">
															{item.category}
														</span>
													</div>
												</div>
												<br />
											</div>
											<div className="col-4 col-sm-6 col-md-3">
												<div className="proc_price ">
													<h4>Procedure Price</h4>
													<h1>
														{"$" + item.proc_price}
													</h1>
												</div>
											</div>
										</div>
									</li>
								);
							});
						}}
					</Context.Consumer>
				</ul>
			</div>
		);
	}
}

/**
 * Define the data-types for
 * your component's properties
 **/
ProcedureCard.propTypes = {
	history: PropTypes.object,
	onDelete: PropTypes.func
};

/**
 * Define the default values for
 * your component's properties
 **/
ProcedureCard.defaultProps = {
	onDelete: null
};
export default withRouter(ProcedureCard);
