import React from "react";
import Navbar from "../component/Navbar.jsx";
import Jumbo from "../component/Jumbotron.jsx";
import MainSelector from "../component/MainSelector.jsx";
import Featured from "../component/featured.jsx";
import HowItWorks from "./howItWorks.jsx";

// import Footer from "../component/Footer.jsx";

const Home = () => {
	return (
		<div>
			<MainSelector />
			<div className="jumbotron jumbotron-fluid py-3 mt-0 text-center home-message">
				<div className="container">
					<p className="my-0">
						List of Community Agencies and Groups that advocate for
						this innovation
					</p>
				</div>
			</div>
			<Featured />
			<HowItWorks />
			<div className="jumbotron jumbotron-fluid py-3 text-center jumbo-video">
				<div className="container">
					<div className="embed-responsive embed-responsive-16by9">
						<iframe
							className="embed-responsive-item"
							src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
							allowFullScreen
						/>
					</div>
				</div>
			</div>

			{/*<Jumbo />*/}
		</div>
	);
};

export default Home;
