import React from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.jsx";
import { Link } from "react-router-dom";
import map from "../../img/map.png";

class LocationCard extends React.Component {
	constructor() {
		super();
		this.state = {
			// initialize your state
		};
	}

	render() {
		return (
			<React.Fragment>
				<ul className="list-group">
					<Context.Consumer>
						{({ store, actions }) => {
							let gn = store.specialties.filter(x => {
								return (
									x.procedure == this.props.match.params.theid
								);
							});
							// console.log(this.props.match.params.name);

							return store.locations.map((item, index) => {
								// console.log(this.props.match.params.theid);

								let pr = gn.find(p => {
									return p.location === item.id;
								});

								// console.log(pr);

								let ln = store.providers.find(pn => {
									return pn.id === pr.provider;
								});
								// console.log(ln);
								// console.log(pr.provider);

								return (
									<li
										className="list-group-item proc_card mb-2"
										key={index}>
										<div className="row">
											<div className="col-12 text-left font-weight-bold h3">
												{ln.name}
											</div>
										</div>
										<div className="row">
											<div className="col-md-8">
												<div className="col-12 text-left font-weight-light">
													<span className="mr-2">
														Address:
													</span>
													{item.address}
												</div>
												<div className="col-12 text-left font-weight-light">
													<span className="mr-2">
														Zip Code:
													</span>
													{item.zip_code}
												</div>

												<div className="col-12 text-left font-weight-light">
													<span className="mr-2">
														City:
													</span>
													{item.city}
												</div>

												<div className="col-12 text-left font-weight-light">
													<span className="mr-2">
														State:
													</span>
													{item.state}
												</div>
											</div>
											<div className="col-md-4 pt-2 px-1 pb-1 ">
												<div className="col-12 text-center font-weight-light h4 ">
													{"$" + " " + pr.price}
												</div>
												<div className="col-12 text-center font-weight-light h6 ">
													<button
														type="button"
														className="btn btn-outline-success btn-sm btn-block">
														Add To Cart
													</button>
												</div>
											</div>
										</div>

										<div className="row mt-2">
											<button
												type="button"
												className="btn btn-info btn-sm btn-block"
												onClick={() =>
													actions.getCompleteProcedure(
														pr.id,
														store.locations[index]
															.procedure[0].name,

														store.locations[index]
															.procedure[0]
															.description,
														store.locations[index]
															.procedure[0]
															.CPT_Code,

														ln.name,
														ln.description,
														ln.id,
														store.locations[index]
															.address,
														store.locations[index]
															.zip_code,
														store.locations[index]
															.city,
														store.locations[index]
															.state,
														store.locations[index]
															.lat,
														store.locations[index]
															.long,
														pr.price,

														this.props
													)
												}>
												Learn More
											</button>
										</div>
									</li>
								);
							});
						}}
					</Context.Consumer>
				</ul>
			</React.Fragment>
		);
	}
}

/**
 * Define the data-types for
 * your component's properties
 **/
LocationCard.propTypes = {
	history: PropTypes.object,
	match: PropTypes.object
};

/**
 * Define the default values for
 * your component's properties
 **/
// LocationCard.defaultProps = {
// 	onDelete: null
// };
export default withRouter(LocationCard);
