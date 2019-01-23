import React from "react";
import { Context } from "../store/appContext.jsx";
import { withRouter } from "react-router-dom";

class SignUp extends React.Component {
	render() {
		return (
			<div className="container my-5">
				<div className="row text-center">
					<div className="col-md-12 mb-3">
						<h1>Create a New Account</h1>
					</div>
				</div>
				<div className="row justify-content-center">
					<div className="col-md-12 mb-3">
						<div className="accordion" id="accordionExample">
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
									<div className="card-body">
										<main className="login-form">
											<div className="cotainer">
												<div className="row justify-content-center">
													<div className="col-md-12">
														<div className="card">
															<div className="card-header">
																Register
															</div>
															<div className="card-body">
																<form
																	action=""
																	method="">
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
																				name="email-address"
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

																	<div className="form-group row">
																		<div className="col-md-6 offset-md-4">
																			<div className="checkbox">
																				<label>
																					<input
																						type="checkbox"
																						name="remember"
																					/>{" "}
																					Remember
																					Me
																				</label>
																			</div>
																		</div>
																	</div>

																	<div className="col-md-6 offset-md-4">
																		<button
																			type="submit"
																			className="btn btn-primary">
																			Register
																		</button>
																		<a
																			href="#"
																			className="btn btn-link">
																			Forgot
																			Your
																			Password?
																		</a>
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
									<div className="card-body">
										Anim pariatur
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default withRouter(SignUp);
