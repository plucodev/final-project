import React from "react";
import { Context } from "../store/appContext.jsx";
import { withRouter } from "react-router-dom";
import Featured from "../component/featured.jsx";
import PropTypes from "prop-types";

class SignUp extends React.Component {
	render() {
		return (
			<div className="container my-5">
				<Context.Consumer>
					{({ store, actions }) => {
						return (
							<React.Fragment>
								<div className="row text-center">
									<div className="col-md-12 mb-3">
										<h1>Create a New Account</h1>
									</div>
								</div>
								<div className="row justify-content-center">
									<div className="col-md-12 mb-3">
										<div
											className="accordion"
											id="accordionExample">
											<div className="card patient-card mb-2">
												<div
													className="card-header text-center"
													id="headingOne">
													<h2 className="mb-0">
														<button
															className="btn btn-link signup_btn"
															type="button"
															data-toggle="collapse"
															data-target="#collapseOne"
															aria-expanded="true"
															aria-controls="collapseOne">
															I am a Patient
														</button>
													</h2>
												</div>

												<div
													id="collapseOne"
													className="collapse"
													aria-labelledby="headingOne"
													data-parent="#accordionExample">
													<div className="card-body register_form">
														<main className="login-form">
															<div className="cotainer">
																<div className="row justify-content-center">
																	<div className="col-md-12">
																		<div className="card">
																			<div className="card-header">
																				Register
																			</div>
																			<div className="card-body register_form">
																				<form
																					action=""
																					method="">
																					<div className="form-group row">
																						<label
																							htmlFor="username"
																							className="col-md-4 col-form-label text-md-right">
																							Username
																						</label>
																						<div className="col-md-6">
																							<input
																								type="text"
																								id="username"
																								className="form-control"
																								name="username"
																								required
																								autoFocus
																							/>
																						</div>
																					</div>
																					<div className="form-group row">
																						<label
																							htmlFor="firstname"
																							className="col-md-4 col-form-label text-md-right">
																							First
																							Name
																						</label>
																						<div className="col-md-6">
																							<input
																								type="text"
																								id="firstname"
																								className="form-control"
																								name="firstname"
																								required
																								autoFocus
																							/>
																						</div>
																					</div>
																					<div className="form-group row">
																						<label
																							htmlFor="lastname"
																							className="col-md-4 col-form-label text-md-right">
																							Last
																							Name
																						</label>
																						<div className="col-md-6">
																							<input
																								type="text"
																								id="lastName"
																								className="form-control"
																								name="lastname"
																								required
																								autoFocus
																							/>
																						</div>
																					</div>
																					<div className="form-group row">
																						<label
																							htmlFor="email_address"
																							className="col-md-4 col-form-label text-md-right">
																							E-Mail
																							Address
																						</label>
																						<div className="col-md-6">
																							<input
																								type="text"
																								id="email_address"
																								className="form-control"
																								name="email"
																								required
																								autoFocus
																							/>
																						</div>
																					</div>

																					<div className="form-group row">
																						<label
																							htmlFor="password"
																							className="col-md-4 col-form-label text-md-right">
																							Password
																						</label>
																						<div className="col-md-6">
																							<input
																								type="password"
																								id="password"
																								className="form-control"
																								name="password"
																								required
																							/>
																						</div>
																					</div>

																					<div className="col-md-6 offset-md-4">
																						<button
																							type="button"
																							className="btn btn-info form-control"
																							onClick={() =>
																								actions.registerNewPatient(
																									document.querySelector(
																										"[name=username]"
																									)
																										.value,
																									document.querySelector(
																										"[name=firstname]"
																									)
																										.value,
																									document.querySelector(
																										"[name=lastname]"
																									)
																										.value,
																									document.querySelector(
																										"[name=email]"
																									)
																										.value,
																									document.querySelector(
																										"[name=password]"
																									)
																										.value,
																									this
																										.props
																								)
																							}>
																							Register
																						</button>
																					</div>
																				</form>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</main>
													</div>
												</div>
											</div>
											<div className="card">
												<div
													className="card-header text-center"
													id="headingTwo">
													<h2 className="mb-0">
														<button
															className="btn btn-link collapsed signup_btn"
															type="button"
															data-toggle="collapse"
															data-target="#collapseTwo"
															aria-expanded="false"
															aria-controls="collapseTwo">
															I am a Provider
														</button>
													</h2>
												</div>
												<div
													id="collapseTwo"
													className="collapse"
													aria-labelledby="headingTwo"
													data-parent="#accordionExample">
													<div className="card-body register_form">
														<main className="login-form">
															<div className="cotainer">
																<div className="row justify-content-center">
																	<div className="col-md-12">
																		<div className="card">
																			<div className="card-header">
																				Register
																			</div>
																			<div className="col-md-12 text-center mt-3">
																				Create
																				a
																				staff
																				member
																				account
																				by
																				selecting
																				your
																				hospital
																				affiliation
																				below.
																			</div>
																			<div className="col-md-12 text-center">
																				Contact
																				us
																				at
																				(855)
																				480-6604.
																				If
																				you
																				are
																				unable
																				to
																				locate
																				your
																				hospital.
																			</div>
																			<div className="col-md-12 text-center my-3">
																				If
																				you
																				do
																				not
																				have
																				an
																				account
																				and
																				would
																				like
																				to
																				partner
																				with
																				MDsave,
																				submit
																				your
																				request
																			</div>

																			<div className="card-body register_form">
																				<form
																					action=""
																					method="">
																					<div className="form-group row">
																						<label
																							htmlFor="useername_prov"
																							className="col-md-4 col-form-label text-md-right">
																							Username
																						</label>
																						<div className="col-md-6">
																							<input
																								type="text"
																								id="username_prov"
																								className="form-control"
																								name="username-prov"
																								required
																								autoFocus
																							/>
																						</div>
																					</div>

																					<div className="form-group row">
																						<label
																							htmlFor="email_address_prov"
																							className="col-md-4 col-form-label text-md-right">
																							E-Mail
																							Address
																						</label>
																						<div className="col-md-6">
																							<input
																								type="text"
																								id="email_address_prov"
																								className="form-control"
																								name="email-address-prov"
																								required
																								autoFocus
																							/>
																						</div>
																					</div>

																					<div className="form-group row">
																						<label
																							htmlFor="password_prov"
																							className="col-md-4 col-form-label text-md-right">
																							Password
																						</label>
																						<div className="col-md-6">
																							<input
																								type="password"
																								id="password_prov"
																								className="form-control"
																								name="password_prov"
																								required
																							/>
																						</div>
																					</div>

																					<div className="col-md-6 offset-md-4">
																						<button
																							type="submit"
																							className="btn btn-info">
																							Register
																						</button>
																					</div>
																				</form>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</main>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</React.Fragment>
						);
					}}
				</Context.Consumer>
			</div>
		);
	}
}

SignUp.propTypes = {
	history: PropTypes.object
};
export default withRouter(SignUp);
