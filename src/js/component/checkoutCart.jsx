import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import "../../styles/cart.css";
import PropTypes from "prop-types";

const ColoredLine = () => (
	<hr
		style={{
			backgroundColor: "light gray",
			height: 1
		}}
	/>
);

export class CheckoutCart extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<div className="row">
					<Context.Consumer>
						{({ store, actions }) => {
							{
								/*let product = store.products.find(products => {
								return products.sku === this.props.sku;
							});*/
							}
							return (
								<React.Fragment>
									<li className="list-group-item d-flex justify-content-between lh-condensed">
										<div>
											<h6 className="my-0">
												{
													store.procedures_test[0]
														.procedureName
												}
											</h6>
											<small className="text-muted">
												{
													store.procedures_test[0]
														.procedureDescription
												}
											</small>
										</div>
										<span className="text-muted">
											{store.procedures_test[0].price} x{" "}
										</span>
									</li>
								</React.Fragment>
							);
						}}
					</Context.Consumer>
				</div>
				<ColoredLine color="gray" />
			</div>
		);
	}
}

CheckoutCart.propTypes = {
	sku: PropTypes.string,
	quantity: PropTypes.number,
	history: PropTypes.object
};
