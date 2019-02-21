import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import shopping from "../../img/surgeon.png";
import doctor from "../../img/doctor.png";
import visit from "../../img/medical-history.png";
import { Context } from "../store/appContext.jsx";
import Map from "../component/Map.jsx";
import HowItWorks from "./howItWorks.jsx";

export class ProviderForm extends Component {
	render() {
		return (
			<div>
				<Context.Consumer>
					{({ store, actions }) => {
						// console.log(store.procedures_test);

						return (
							<React.Fragment>
								<div
									className="jumbotron py-4 "
									id="jumboSingle">
									<div className="container">
										<div className="row">
											<div className="col-md-10">
												<div className="row">
													<div className="col-md-12 h1 text-left">
														{
															store
																.procedures_test[0]
																.procedureName
														}
													</div>
													<div className="col-md-12 h3 text-left font-weight-light">
														{
															store
																.procedures_test[0]
																.providerName
														}
													</div>
												</div>
												<div className="row">
													<div className="col-md-12">
														<span className="mr-2 font-weight-bold text-info">
															Provider
															Information:
														</span>
														{
															store
																.procedures_test[0]
																.providerDescription
														}
													</div>
													<div className="col-md-12">
														<span className="mr-2 font-weight-bold text-info">
															Procedure Details:
														</span>
														{
															store
																.procedures_test[0]
																.procedureDescription
														}
													</div>
													<div className="col-md-12">
														<span className="mr-2 font-weight-bold text-info">
															CPT Code:
														</span>
														{
															store
																.procedures_test[0]
																.CPT_Code
														}
													</div>
												</div>
											</div>

											<div className="col-md-2 border border-info rounded h1 m-auto text-center p-3">
												<div className="font-weight-light h6">
													{
														store.procedures_test[0]
															.procedureName
													}
												</div>
												<div>
													{"$" +
														" " +
														store.procedures_test[0]
															.price}
												</div>
												<div>
													<button
														type="button"
														className="btn btn-info btn-sm "
														onClick={() =>
															actions.addProductToCart(
																store
																	.procedures_test[0]
																	.CPT_Code
															)
														}>
														Add To Cart
													</button>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div className="container">
									<div className="row">
										<div className="col-md-3 ">
											<div className="row">
												<div className="col-md-12 bg-light rounded mb-3">
													Map
												</div>
												<div className="col-md-12">
													<Map
														id="myMapSingle"
														options={{
															center: {
																lat:
																	store
																		.procedures_test[0]
																		.locationLat,
																lng:
																	store
																		.procedures_test[0]
																		.locationLong
															},
															zoom: 8
														}}
														onMapLoad={map => {
															var marker = new window.google.maps.Marker(
																{
																	position: {
																		lat:
																			store
																				.procedures_test[0]
																				.locationLat,
																		lng:
																			store
																				.procedures_test[0]
																				.locationLong
																	},

																	map: map,
																	title:
																		"Hello Istanbul!"
																}
															);
														}}
													/>
												</div>
											</div>
											<hr />
											<div className="row">
												<div className="col-md-12 mb-3 rounded bg-light">
													Location
												</div>
												<div className="col-md-12 font-weight-light">
													{
														store.procedures_test[0]
															.locationAddress
													}
												</div>

												<div className="col-md-12 font-weight-light">
													<span className="mr-3">
														{
															store
																.procedures_test[0]
																.locationCity
														}
													</span>
													<span className="mr-3">
														{
															store
																.procedures_test[0]
																.locationState
														}
													</span>
													<span className="mr-3">
														{
															store
																.procedures_test[0]
																.locationZipCode
														}
													</span>
												</div>
											</div>
											<hr />
											<div className="row">
												<div className="col-md-12 mb-3 rounded bg-light">
													Hours
												</div>

												<div className="col-md-12 hours ">
													Mon
													<span className="float-right font-weight-light">
														6:30am - 7:00pm
													</span>
												</div>
												<div className="col-md-12 hours ">
													Tue
													<span className="float-right font-weight-light">
														6:30am - 7:00pm
													</span>
												</div>
												<div className="col-md-12 hours ">
													Wed
													<span className="float-right font-weight-light">
														6:30am - 7:00pm
													</span>
												</div>
												<div className="col-md-12 hours ">
													Thu
													<span className="float-right font-weight-light">
														6:30am - 7:00pm
													</span>
												</div>
												<div className="col-md-12 hours ">
													Fri
													<span className="float-right font-weight-light">
														6:30am - 7:00pm
													</span>
												</div>
												<div className="col-md-12 hours ">
													Sat
													<span className="float-right font-weight-light">
														6:30am - 7:00pm
													</span>
												</div>
												<div className="col-md-12 hours ">
													Sun
													<span className="float-right font-weight-light">
														6:30am - 7:00pm
													</span>
												</div>
											</div>

											<hr />
										</div>
										<div className="col-md-9">
											<div className="row">
												<div className="col-md-12 font-weight-bold">
													About{" "}
													{
														store.procedures_test[0]
															.providerDescription
													}
												</div>
												<div className="col-md-12 font-weight-light my-3">
													<span className="text-info mr-1 font-weight-bold">
														{
															store
																.procedures_test[0]
																.providerName
														}
													</span>
													, one of the largest
													healthcare systems in
													Illinois, is committed to
													supporting the medical and
													wellness needs of the
													communities we serve. The
													AMITA Health system includes
													16 medical centers, 3
													specialty care hospitals, 20
													immediate care centers, more
													than 230 primary and
													specialty care clinics and
													outpatient facilities, and
													an extensive network of 900
													employed providers and
													another 7,000 affiliated
													partners. Our mission is to
													extend the healing ministry
													of Jesus by delivering the
													most efficient,
													highest-quality, faith-based
													care possible. When your
													doctor orders blood work or
													other types of diagnostic
													tests, AMITA Health provides
													convenient access to
													laboratory services for
													patients of all ages. We
													also provide consultative
													services for physicians and
													surgeons, when necessary, to
													deliver the service, quality
													and accuracy you deserve.
												</div>
												<hr />
												<div className="col-md-12 font-weight-bold">
													About Apoyo
												</div>
												<div className="col-md-12 font-weight-light my-3">
													<span className="text-info mr-1 font-weight-bold">
														Apoyo{" "}
													</span>
													Health, one of the largest
													healthcare systems in
													Illinois, is committed to
													supporting the medical and
													wellness needs of the
													communities we serve. The
													AMITA Health system includes
													16 medical centers, 3
													specialty care hospitals, 20
													immediate care centers, more
													than 230 primary and
													specialty care clinics and
													outpatient facilities, and
													an extensive network of 900
													employed providers and
													another 7,000 affiliated
													partners. Our mission is to
													extend the healing ministry
													of Jesus by delivering the
													most efficient,
													highest-quality, faith-based
													care possible. When your
													doctor orders blood work or
													other types of diagnostic
													tests, AMITA Health provides
													convenient access to
													laboratory services for
													patients of all ages. We
													also provide consultative
													services for physicians and
													surgeons, when necessary, to
													deliver the service, quality
													and accuracy you deserve.
												</div>
												<hr />

												<hr />
											</div>
										</div>
									</div>
								</div>
							</React.Fragment>
						);
					}}
				</Context.Consumer>
				{/*<div>
					<HowItWorks />
				</div>*/}
			</div>
		);
	}
}
export default withRouter(ProviderForm);
