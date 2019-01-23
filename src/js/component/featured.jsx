import React from "react";
import { Context } from "../store/appContext.jsx";
import { withRouter } from "react-router-dom";

class Featured extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<div className="container my-5 text-center">
							<div className="row text-center my-3">
								<div className="col-md-12">
									<h2 className="display-5 font-weight-light">
										Featured Procedures
									</h2>
								</div>
							</div>
							<div className="row">
								<div className="col-sm-3">
									<div className="card border border-info">
										<div className="card-body text-center">
											<h5 className="card-title">
												{store.demo[0].title}
											</h5>
											<p className="card-price">
												{store.demo[0].price}
											</p>
											<p className="card-text">
												{store.demo[0].content}
											</p>
											<a
												href="#"
												className="btn btn-info">
												Shop Now
											</a>
										</div>
									</div>
								</div>
								<div className="col-sm-3">
									<div className="card border border-info">
										<div className="card-body text-center">
											<h5 className="card-title">
												{store.demo[1].title}
											</h5>
											<p className="card-price">
												{store.demo[1].price}
											</p>
											<p className="card-text">
												{store.demo[1].content}
											</p>

											<a
												href="#"
												className="btn btn-info">
												Shop Now
											</a>
										</div>
									</div>
								</div>
								<div className="col-sm-3">
									<div className="card border border-info">
										<div className="card-body text-center">
											<h5 className="card-title">
												{store.demo[2].title}
											</h5>
											<p className="card-price">
												{store.demo[2].price}
											</p>
											<p className="card-text">
												{store.demo[2].content}
											</p>
											<a
												href="#"
												className="btn btn-info">
												Shop Now
											</a>
										</div>
									</div>
								</div>
								<div className="col-sm-3">
									<div className="card border border-info">
										<div className="card-body text-center">
											<h5 className="card-title">
												{store.demo[3].title}
											</h5>
											<p className="card-price">
												{store.demo[3].price}
											</p>
											<p className="card-text">
												{store.demo[3].content}
											</p>
											<a
												href="#"
												className="btn btn-info">
												Shop Now
											</a>
										</div>
									</div>
								</div>
							</div>
							<div className="row mt-4">
								<div className="col-md-12">
									<button
										type="button"
										className="btn btn-outline-info">
										Shop More Procedures
									</button>
								</div>
							</div>
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}
export default withRouter(Featured);
