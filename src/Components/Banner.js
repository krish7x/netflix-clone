import React, { useState, useEffect } from "react";
import Axios from "axios";
import requests from "../Api calls/requests";
import "./Banner.css";

const Banner = () => {
	const [movie, setMovie] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const req = await Axios.get(requests.fetchTrending);
			setMovie(
				req.data.results[
					Math.floor(Math.random() * req.data.results.length - 1)
				]
			);
			return req;
		};
		fetchData();
	}, []);

	const truncate = (str, n) => {
		return str?.length > n ? str.substr(0, n - 1) + "..." : str;
	};
	return (
		<header
			className='banner'
			style={{
				backgroundSize: "cover",
				backgroundPosition: "center center",
				backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
			}}>
			{/*Background image */}
			<div className='banner__contents'>
				{movie && (
					<h1 className='banner__title'>
						{movie?.title || movie?.name || movie?.original_name}
					</h1>
				)}

				<div className='banner__buttons'>
					<button className='banner__button'>Play</button>
					<button className='banner__button'>My List</button>
				</div>

				<div className='banner__description'>
					<h2>{truncate(movie?.overview, 150)}</h2>
				</div>
			</div>
			<div className='banner--fadeBottom' />
		</header>
	);
};

export default Banner;
