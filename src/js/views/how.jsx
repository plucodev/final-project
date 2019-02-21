import React from "react";
import Featured from "../component/featured.jsx";
import HowItWorks from "./howItWorks.jsx";

// import Footer from "../component/Footer.jsx";

const How = () => {
	return (
		<div>
			<HowItWorks />
			<div className="jumbotron jumbotron-fluid">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<h1 className="display-4 text-info">About Apoyo</h1>
							<p className="lead">
								Apoyo is the world’s first online healthcare
								marketplace, bringing together patients seeking
								affordable, reliable care with providers
								offering high quality services at fair prices.
							</p>
						</div>
					</div>
					<div className="row">
						<div className="col-md-12">
							<div className="h3">What is in it for you?</div>
							<p className="lead">
								Save money by prepaying your bill online before
								your doctors visit. Choose from our network of
								180+ Hospitals and 2,000+ Providers.
							</p>
						</div>
					</div>
					<div className="row">
						<div className="col-md-12">
							<div className="h3">
								What’s in it for providers?
							</div>
							<p className="lead">
								Providers join our network so they reach new
								patients through our site - people like you.
								They are willing to offer better prices since
								you pay online before your visit.
							</p>
						</div>
					</div>
				</div>
			</div>
			<Featured />
		</div>
	);
};

export default How;
