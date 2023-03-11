import React from "react";

//include images into your bundle

import Navbar from "./navbar.jsx"
import Jumbotron from "./jumbotron.jsx"
import Card from "./card.jsx"
import Footer from "./footer.jsx"
import '../../styles/home.css'

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
			<div className="hero">
				<Jumbotron />
				<div className="row card-row">
					<div className="col card-col">
						<Card />
					</div>			
					<div className="col">
						<Card />
					</div>
					<div className="col">
						<Card />
					</div>	
					<div className="col">
						<Card />
					</div>
				</div>
			</div>
		 	<Footer />
		</div>
			
	);
};

export default Home;
