import React from "react";
import Featured from "../component/featured.jsx";
import HowItWorks from "./howItWorks.jsx";
import MainSelector from "../component/MainSelector.jsx";
import { Context } from "../store/appContext.jsx";
import PropTypes from "prop-types";

// import Footer from "../component/Footer.jsx";

class Procedure extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					var product = store.procedures.find(item => {
						return item.id == this.props.match.params.theid;
					});
					console.log(product);

					return (
						<div className="container">
							<div className="row">
								<div className="col-md-12">
									<h2>{product.name}</h2>
								</div>
							</div>
							<div className="row">
								<div className="col-md-7">
									<p>{product.description}</p>
								</div>

								<div className="col-md-2 mr-1 average_box p-3 text-center">
									<p>NATIONAL AVERAGE PRICE</p>
									{product.price}
								</div>
								<div className="col-md-2 price_box p-3 text-center">
									<p>WEBSITE AVERAGE PRICE</p>
									{product.category}
								</div>
							</div>
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}
Procedure.propTypes = {
	match: PropTypes.object
};

export default Procedure;

// var procedure = store.procedures.find(item => {
// 					return item.id == this.props.match.params.theid;
// 				});
