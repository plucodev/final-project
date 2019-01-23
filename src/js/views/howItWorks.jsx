import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import shopping from "../../img/surgeon.png";
import doctor from "../../img/doctor.png";
import visit from "../../img/medical-history.png";

export class HowItWorks extends Component {
	render() {
		return (
			<div className="jumbotron jumbotron-fluid mb-0 mt-2 howitworks pt-0">
				<div className="container text-center">
					<div className="row text-center mb-3">
						<div className="col-md-12">
							<h2 className="display-5 font-weight-light">
								How It Works
							</h2>
						</div>
					</div>
					<div className="row">
						<div className="col-md-4">
							<img src={visit} alt="..." className="img" />
							<h5 className="display-6 my-2">
								Search a provider
							</h5>
							<p className="lead">
								Search our network of 180+ hospitals and
								providers and compare prices for over 1,300
								procedures. Our bundled prices include all
								related fees.
							</p>
						</div>

						<div className="col-md-4">
							<img src={shopping} alt="..." className="img" />
							<h5 className="display-6 my-2">Compare Prices</h5>
							<p className="lead">
								Pay for your procedure in advance through our
								secure site or by calling our Support
								Specialists at (305) 123-4567. That’s it — no
								more bills.
							</p>
						</div>
						<div className="col-md-4">
							<img src={doctor} alt="..." className="img" />
							<h5 className="display-6 my-2">Buy a Procedure</h5>
							<p className="lead">
								Follow the scheduling instructions for your
								selected provider. Bring a copy of your purchase
								voucher to your appointment as proof of payment.
							</p>
						</div>
					</div>
					<div className="row mt-4">
						<div className="col-md-12">
							<button
								type="button"
								className="btn btn-outline-info">
								Learn More
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default withRouter(HowItWorks);
