import React from "react";
import Navbar from "../component/Navbar.jsx";
import Jumbo from "../component/Jumbotron.jsx";
import MainSelector from "../component/MainSelector.jsx";

// import Footer from "../component/Footer.jsx";

const Home = () => {
	return (
		<div>
			<Navbar />
			<MainSelector />
			<div className="jumbotron jumbotron-fluid py-3 text-center">
				<div className="container">
					<p className="lead my-0">
						List of Community Agencies and Groups that advocate for
						this innovation
					</p>
				</div>
			</div>

			{/*<Jumbo />*/}
		</div>
	);
};

export default Home;
