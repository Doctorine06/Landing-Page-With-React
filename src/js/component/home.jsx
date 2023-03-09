import React from "react";

//include images into your bundle

import Navbar from "./navbar.jsx"
import Jumbotron from "./jumbotron.jsx"
import Card from "./card.jsx"
import Footer from "./footer.jsx";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />	
			<Jumbotron />
			<div className="row">
				<Card />
			<div className="col" style={{height: 18+'rem'}}></div>	
				<Card />
			<div className="col"></div>			
				<Card />
			<div className="col"></div>		
				<Card />
			<div className="col"></div>		
			</div>
			<Footer />
		 </div>
			
	);
};

export default Home;
