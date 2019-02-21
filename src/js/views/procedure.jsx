import React from "react";
import { withRouter } from "react-router-dom";
import Featured from "../component/featured.jsx";
import HowItWorks from "./howItWorks.jsx";
import MainSelector from "../component/MainSelector.jsx";
import { Context } from "../store/appContext.jsx";
import PropTypes from "prop-types";
import ProcedureCard from "../component/ProcedureCard.jsx";
import Search from "../component/Search.jsx";
import LocationCard from "../component/LocationCard.jsx";
// import ErrorBoundary from "../component/ErrorBoundary.jsx";
import { Link } from "react-router-dom";
import Map from "../component/Map.jsx";

// import Footer from "../component/Footer.jsx";

class Procedure extends React.Component {
	constructor() {
		super();
		this.state = {};
	}
	render() {
		return (
			<React.Fragment>
				<div className="container">
					<div className="row">
						<Context.Consumer>
							{({ store, actions }) => {
								var procedur = store.searchResults.find(
									item => {
										return (
											item.id ==
											this.props.match.params.theid
										);
									}
								);
								// console.log(procedure);
								// console.log(store.searchResults);
								return (
									<div className="col-md-12">
										<div className="card border-info text-center my-3">
											<div className="card-body ">
												<h3 className="card-title">
													{procedur.name}
												</h3>
												<p className="card-text">
													{procedur.description}
												</p>
											</div>
											<div className="card-footer bg-transparent">
												Category
											</div>
										</div>
									</div>
								);
							}}
						</Context.Consumer>
					</div>
				</div>
				<div className="container">
					<div className="row">
						<div className="col-md-6">
							<LocationCard />
						</div>
						<Context.Consumer>
							{({ store, actions }) => {
								return (
									<div className="col-md-6">
										<Map
											id="myMap"
											options={{
												center: {
													lat: 25.815456,
													lng: -80.138213
												},
												zoom: 8
											}}
											onMapLoad={map => {
												var marker, i;
												map.locations = [];
												for (
													i = 0;
													i < store.locations.length;
													i++
												) {
													marker = new window.google.maps.Marker(
														{
															position: {
																lat: parseFloat(
																	store
																		.locations[
																		i
																	].lat
																),
																lng: parseFloat(
																	store
																		.locations[
																		i
																	].long
																)
															},
															map: map,
															title:
																store.locations[
																	i
																].name
														}
													);
												}
											}}
										/>
									</div>
								);
							}}
						</Context.Consumer>
					</div>
				</div>
				<div className="jumbotron jumbotron-fluid mt-4 mb-0">
					<div className="col-md-12 h4 text-center mb-3">
						Search Again
					</div>
					<div className="container">
						<Search />
					</div>
				</div>
			</React.Fragment>
		);
	}
}

Procedure.propTypes = {
	match: PropTypes.object
};
export default withRouter(Procedure);
// class Procedure extends React.Component {
// 	render() {
// 		return (
// 			<React.Fragment>
// 				<Context.Consumer>
// 					{({ store, actions }) => {
// 						var product = store.procedures.find(item => {
// 							return item.id == this.props.match.params.theid;
// 						});
// 						var providerList = store.proceduresLocations.filter(
// 							item => {
// 								return item.procedure.id === product.id;
// 							}
// 						);
// 						// console.log(product);
// 						// console.log(providerList);

// 						return (
// 							<React.Fragment>
// 								<div className="container">
// 									<div className="row">
// 										<div className="col-md-12">
// 											<h2>{product.name}</h2>
// 										</div>
// 									</div>
// 									<div className="row">
// 										<div className="col-md-7">
// 											<p>{product.description}</p>
// 											<p>{store.parameter}</p>
// 										</div>
// 									</div>
// 								</div>
// 								<div className="container">
// 									<div className="row">
// 										<div className="col-md-6">
// 											<ul className="list-group mb-2">
// 												{({ store, actions }) => {
// 													return providerList.map(
// 														(item, index) => {
// 															return (
// 																<li
// 																	className="container list-group-item"
// 																	key={index}>
// 																	{item.name}
// 																</li>
// 															);
// 														}
// 													);
// 												}}
// 											</ul>
// 										</div>
// 									</div>
// 								</div>
// 							</React.Fragment>
// 						);
// 					}}
// 				</Context.Consumer>
// 			</React.Fragment>
// 		);
// 	}
// }
// Procedure.propTypes = {
// 	match: PropTypes.object
// };

// export default Procedure;

// var procedure = store.procedures.find(item => {
// 					return item.id == this.props.match.params.theid;
// 				});

// <Context.Consumer>
// 				<ul className="list-group mb-2">
// 					{({ store, actions }) => {
// 						return providerList.map((item, index) => {
// 							return (
// 								<li
// 									className="container list-group-item"
// 									key={index}>
// 									{item.name}
// 								</li>
// 							);
// 						});
// 					}}
// 				</ul>
// 			</Context.Consumer>

// <ul className="list-group col-md-6">
// 							<Context.Consumer>
// 								{({ store, actions }) => {
// 									return store.locations.map((i, n) => {
// 										return (
// 											<React.Fragment key={n}>

// 												<li className="list-group-item proc_card mb-2">
// 													<div className="row">
// 														<div className="col-md-12 text-left font-weight-bold">
// 															<Link to={"#"}>
// 																<label
// 																	className="name lead"
// 																	style={{
// 																		cursor:
// 																			"pointer"
// 																	}}>
// 																	{i.name}
// 																</label>
// 															</Link>
// 														</div>
// 													</div>
// 													<div className="row">
// 														<div className="col-md-8 text-left font-weight-light">
// 															<div className="col-md-12">
// 																<span className="mr-2">
// 																	Address:
// 																</span>
// 																{i.address}
// 															</div>
// 															<div className="col-md-12">
// 																<span className="mr-2">
// 																	Zip Code:
// 																</span>
// 																{i.zip_code}
// 															</div>
// 															<div className="col-md-12">
// 																<span className="mr-2">
// 																	City:
// 																</span>
// 																{i.city}
// 															</div>
// 															<div className="col-md-12">
// 																<span className="mr-2">
// 																	State:
// 																</span>
// 																{i.state}
// 															</div>
// 														</div>
// 														<div className="col-md-4">
// 															<button
// 																type="button"
// 																className="btn btn-outline-warning btn-sm btn-block">
// 																Learn More
// 															</button>
// 															<button
// 																type="button"
// 																className="btn btn-outline-success btn-sm btn-block">
// 																Add To Cart
// 															</button>
// 														</div>
// 													</div>
// 												</li>
// 											</React.Fragment>
// 										);
// 									});
// 								}}
// 							</Context.Consumer>
// 						</ul>

// onMapLoad={map => {
// 												var marker = new window.google.maps.Marker(
// 													{
// 														position: {
// 															lat: 25.815456,
// 															lng: -80.138213
// 														},

// 														map: map,
// 														title:
// 															store.locations[0]
// 																.address
// 													}
// 												);
// 											}}
