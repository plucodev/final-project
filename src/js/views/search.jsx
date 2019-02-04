import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import ProcedureCard from "../component/ProcedureCard.jsx";
// import shopping from "../../img/surgeon.png";
// import doctor from "../../img/doctor.png";
// import visit from "../../img/medical-history.png";

class Search extends Component {
	render() {
		return (
			<div className="jumbotron jumbotron-fluid mb-0 mt-2 howitworks pt-0">
				<div className="container text-center">
					<div className="row text-center mb-3">
						<div
							id="contacts"
							className="panel-collapse collapse show"
							aria-expanded="true">
							<ul
								className="list-group pull-down"
								id="contact-list">
								<ProcedureCard
									onDelete={() =>
										this.setState({ showModal: true })
									}
								/>
							</ul>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default withRouter(Search);
