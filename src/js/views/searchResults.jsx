import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import ProcedureCard from "../component/ProcedureCard.jsx";
import LocationCard from "../component/LocationCard.jsx";
import Search from "../component/Search.jsx";
// import shopping from "../../img/surgeon.png";
// import doctor from "../../img/doctor.png";
// import visit from "../../img/medical-history.png";

class SearchResults extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="jumbotron jumbotron-fluid">
					<div className="container">
						<Search />
					</div>
				</div>

				<div className="jumbotron jumbotron-fluid mb-0 mt-2 howitworks pt-0">
					<div className="container text-center">
						<div className="row text-center mb-3">
							<Context.Consumer>
								{({ store, actions }) => {
									let message = "";
									let message2 = "";
									let search = store.searchResults;

									if (search) {
										message = "We found ";
										message2 = "procedure";
									} else {
										message =
											"Your search returned 0 results. Please adjust your search!";
										message2 = "";
									}
									return (
										<div className="col-md-12 h3">
											{message}
											{store.searchResults.length}{" "}
											{message2}
										</div>
									);
								}}
							</Context.Consumer>
						</div>
						<div className="row text-center mb-3">
							<div className="col-md-6 m-auto">
								<ProcedureCard />
							</div>
							{/*<div className="col-md-7">Procedure Map</div>*/}
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
export default withRouter(SearchResults);
