import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import Search from "./Search.jsx";

class MainSelector extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<div className="jumbotron mb-0 mainselector">
							<div className="container">
								<div className="row">
									<div className="col-md-12">
										<h1 className="display-4 text-center">
											Shopping for Healthcare Services
										</h1>
									</div>
								</div>
								<div className="row">
									<div className="col-md-4 mb-5 text-center">
										<div>
											<i className="fas fa-thumbtack text-muted mr-3" />
											Compare local prices
										</div>
									</div>
									<div className="col-md-4 mb-5 text-center">
										<div>
											<i className="fas fa-hand-holding-usd text-muted mr-3" />
											Save money
										</div>
									</div>
									<div className="col-md-4 mb-5 text-center">
										<div>
											<i className="fas fa-shopping-cart text-muted mr-3" />
											Buy your procedure
										</div>
									</div>
								</div>

								<Search />
							</div>
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}
MainSelector.propTypes = {
	history: PropTypes.object
};

export default withRouter(MainSelector);
