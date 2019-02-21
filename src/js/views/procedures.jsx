import React from "react";
import Featured from "../component/featured.jsx";
import HowItWorks from "./howItWorks.jsx";
import MainSelector from "../component/MainSelector.jsx";
import ProcedureCard from "../component/ProcedureCard.jsx";
import { Context } from "../store/appContext.jsx";
import { Link } from "react-router-dom";
import Search from "../component/Search.jsx";

// import Footer from "../component/Footer.jsx";

const Procedures = () => {
	return (
		<React.Fragment>
			<div className="container">
				<div className="row mt-4">
					<div className="col-md-12 text-center">
						<div className="h1 text-center mb-4">Procedures</div>
					</div>
				</div>
				<div className="row mb-3">
					<div className="col-md-12">
						<nav className="navbar navbar-expand-lg navbar-light navbar-list mb-2">
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
								className="collapse navbar-collapse"
								id="navbarNav">
								<ul className="navbar-nav">
									<li className="nav-item">
										<a className="nav-link" href="#">
											All Specialties{" "}
											<span className="sr-only">
												(current)
											</span>
										</a>
									</li>
									<li className="nav-item">
										<a className="nav-link" href="#">
											Labs
										</a>
									</li>
									<li className="nav-item">
										<a className="nav-link" href="#">
											Imaging
										</a>
									</li>
									<li className="nav-item">
										<a className="nav-link" href="#">
											General Surgery
										</a>
									</li>
								</ul>
							</div>
						</nav>
						<div className="container">
							<div className="row">
								<div className="col-md-8 m-auto">
									<ul className="list-group mb-2">
										<Context.Consumer>
											{({ store, actions }) => {
												return store.procedures.map(
													(item, index) => {
														return (
															<li
																className="list-group-item proc_card mb-2"
																key={index}>
																<div className="row">
																	<div className="col-md-12 text-left font-weight-bold">
																		{
																			item.name
																		}
																	</div>
																</div>
																<div className="row">
																	<div className="col-md-8 text-left font-weight-light">
																		<div>
																			{
																				item.description
																			}
																		</div>
																		<div className="text-info">
																			<span className="mr-2 text-dark">
																				CPT
																				Code:
																			</span>
																			{
																				item.CPT_Code
																			}
																		</div>
																	</div>
																	<div className="col-md-4">
																		<button
																			onClick={() =>
																				actions.singleProcedureDetails(
																					item.id,
																					this
																						.props
																				)
																			}
																			type="button"
																			className="btn btn-outline-info btn-sm ">
																			Learn
																			More
																		</button>
																	</div>
																</div>
															</li>
														);
													}
												);
											}}
										</Context.Consumer>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="jumbotron jumbotron-fluid mb-0">
				<div className="container">
					<Search />
				</div>
			</div>
		</React.Fragment>
	);
};

export default Procedures;

// <Context.Consumer className="card-deck">
// 	{({ store }) => {
// 		return store.procedures.map((item, index) => {
// 			return <ProcedureCard sku={item.sku} key={index} />;
// 		});
// 	}}
// </Context.Consumer>;

// <li
// 											className="container list-group-item"
// 											key={index}>
// 											<div className="row">
// 												<div className="col-md-10">
// 													<div className="font-weight-bold">
// 														<Link
// 															to={
// 																"/procedure/" +
// 																item.id
// 															}>
// 															{item.name}
// 														</Link>
// 													</div>
// 													<div>
// 														{item.description}
// 													</div>
// 												</div>
// 												<div className="col-md-2">
// 													<button
// 														type="button"
// 														className="btn btn-info btn-sm btn-block">
// 														Learn More
// 													</button>
// 													<button
// 														type="button"
// 														className="btn btn-outline-success btn-sm btn-block">
// 														Add To Cart
// 													</button>
// 												</div>
// 											</div>
// 										</li>
