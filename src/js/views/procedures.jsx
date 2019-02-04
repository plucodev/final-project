import React from "react";
import Featured from "../component/featured.jsx";
import HowItWorks from "./howItWorks.jsx";
import MainSelector from "../component/MainSelector.jsx";
import ProcedureCard from "../component/ProcedureCard.jsx";
import { Context } from "../store/appContext.jsx";

// import Footer from "../component/Footer.jsx";

const Procedures = () => {
	return (
		<div>
			<div className="h1 text-center mb-4">Products</div>
			<Context.Consumer className="card-deck">
				{({ store }) => {
					return store.procedures.map((item, index) => {
						return <ProcedureCard sku={item.sku} key={index} />;
					});
				}}
			</Context.Consumer>
		</div>
	);
};

export default Procedures;
