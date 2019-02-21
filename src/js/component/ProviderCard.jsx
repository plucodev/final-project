import React from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.jsx";
import { Link } from "react-router-dom";
import map from "../../img/map.png";

class ProviderCard extends React.Component {
	constructor() {
		super();
		this.state = {
			// initialize your state
		};
	}

	render() {
		return (
			<React.Fragment>
				
					<Context.Consumer>
						{({ store, actions }) => {
						
							return (<div>{}</div>);
							
						
						}}
					</Context.Consumer>
				
			</React.Fragment>
		);
	}
}

/**
 * Define the data-types for
 * your component's properties
 **/
ProviderCard.propTypes = {
	history: PropTypes.object,
	onDelete: PropTypes.func
};

/**
 * Define the default values for
 * your component's properties
 **/
ProviderCard.defaultProps = {
	onDelete: null
};
export default withRouter(ProviderCard);