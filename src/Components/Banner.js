import React, { useState, useEffect } from "react";
import Axios from "axios";
import requests from "../api/requests";
import "./Banner.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
const opts = {
	height: "390",
	width: "100%",
	playerVars: {
		// https://developers.google.com/youtube/player_parameters
		autoplay: 1,
	},
};

const Banner = () => {
	const [movie, setMovie] = useState([]);
	const [trailerUrl, setTrailerUrl] = useState("");
	const fetchData = async () => {
		const req = await Axios.get(requests.fetchTopRated);
		setMovie(
			req.data.results[Math.floor(Math.random() * req.data.results.length - 1)]
		);
		return req;
	};

	useEffect(() => {
		fetchData();
	}, []);

	const truncate = (str, n) => {
		return str?.length > n ? str.substr(0, n - 1) + "..." : str;
	};
	const handleClick = (m) => {
		if (trailerUrl) {
			setTrailerUrl("");
		} else {
			movieTrailer(m?.title || m?.name || m?.original_name || "")
				.then((url) => {
					const urlParams = new URLSearchParams(new URL(url).search);
					setTrailerUrl(urlParams.get("v"));
				})
				.catch((err) => console.log(err));
		}
	};
	return (
		<div>
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
					{/*Buttons*/}
					<div className='banner__buttons'>
						<button
							className='banner__button'
							onClick={() => handleClick(movie)}>
							Play
						</button>
						<button className='banner__button'>My List</button>
					</div>
					{/*Discription*/}
					<div className='banner__description'>
						<h2>{truncate(movie?.overview, 150)}</h2>
					</div>
				</div>
				<div className='banner--fadeBottom' />
			</header>
			{/*Trailer*/}
			<div>{trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}</div>
		</div>
	);
};

export default Banner;
