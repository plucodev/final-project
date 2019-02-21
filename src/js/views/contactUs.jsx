import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";

import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

class ContactUs extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div className="container">
					<div className="row">
						<div className="col-md-12 h1 text-center mt-3">
							Contact Us
						</div>
					</div>
					<div className="row">
						<div className="col-md-12 h4 text-center mt-3">
							Please use the contact form to send us a message. We
							appreciate you spending time on our website and look
							forward to speaking with you soon. Thanks!
						</div>
					</div>
					<div className="row">
						<div className="col-md-12">
							<div className="card-body register_form">
								<form action="" method="">
									<div className="form-group row" />
									<div className="form-group row">
										<label
											htmlFor="firstname"
											className="col-md-4 col-form-label text-md-right">
											First Name
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
											Last Name
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
											E-Mail Address
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
											Phone
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
										<label
											className="col-md-4 col-form-label text-md-right"
											htmlFor="exampleFormControlTextarea1">
											Message
										</label>
										<div className="col-md-6">
											<textarea
												className="form-control"
												id="exampleFormControlTextarea1"
												rows="3"
											/>
										</div>
									</div>

									<div className="col-md-6 offset-md-4">
										<button
											type="button"
											className="btn btn-info form-control">
											Send
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default withRouter(ContactUs);
