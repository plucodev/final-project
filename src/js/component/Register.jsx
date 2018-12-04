import React from "react";
import Home from "../views/home.jsx";
import HowItWorks from "../views/howItWorks.jsx";
import { Link } from "react-router-dom";
import rigoImage from "../../img/014-hospital.png";

const RegisterPage = () => {
	return (
		<div className="container mt-3">
			<div className="jumbotron pt-3 registerContainer">
				<div className="row">
					<div className="h2 col-lg-12 mb-3 text-center">
						I am a Patient
					</div>
					<div className="h2 col-lg-6 text-center">
						<form>
							<div className="form-group">
								<input
									type="email"
									className="form-control"
									id="exampleInputEmail1"
									aria-describedby="emailHelp"
									placeholder="Enter email"
								/>
							</div>
							<div className="form-group">
								<input
									type="password"
									className="form-control"
									id="exampleInputPassword1"
									placeholder="Password"
								/>
							</div>
							<div className="form-group">
								<input
									type="password"
									className="form-control"
									id="exampleInputPassword1"
									placeholder="Confirm Password"
								/>
							</div>

							<button
								type="submit"
								className="btn btn-primary col-lg-12">
								Register
							</button>
						</form>
					</div>
					<div className="h2 col-lg-6 text-center registerImage">
						<img src={rigoImage} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default RegisterPage;
