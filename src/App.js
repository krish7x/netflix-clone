import React from "react";
import "./App.css";
import Row from "./Components/Row";
import requests from "./Api calls/requests";
import Banner from "./Components/Banner";
import Nav from "./Components/Nav";

const App = () => {
	return (
		<div className='app'>
			<Nav />
			<Banner />
			<Row
				title='Netflix Originals'
				fetchUrl={requests.fetchNetflixOriginals}
				isLargeRow='true'
			/>
			<Row title='Trending Now' fetchUrl={requests.fetchTrending} />
			<Row title='Top Rated' fetchUrl={requests.fetchTopRated} />
			<Row title='Action Movies' fetchUrl={requests.fetchActionMovies} />
			<Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies} />
			<Row title='Drama Movies' fetchUrl={requests.fetchDramaMovies} />
			<Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies} />
			<Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies} />
			<Row title='Thriller Movies' fetchUrl={requests.fetchThrillerMovies} />
		</div>
	);
};

export default App;
