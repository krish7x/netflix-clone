import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const baseUrl = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl, isLargeRow }) => {
	const [movies, setMovies] = useState([]);
	const [trailerUrl, setTrailerUrl] = useState("");

	const opts = {
		height: "390",
		width: "100%",
		playerVars: {
			// https://developers.google.com/youtube/player_parameters
			autoplay: 1,
		},
	};

	useEffect(() => {
		const fetchData = async () => {
			const request = await axios.get(`${fetchUrl}`);
			setMovies(request.data.results);
			return request;
		};

		fetchData();
	}, [fetchUrl]);

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
		<div className='row'>
			{movies && <h2 className='row__title'>{title}</h2>}
			<div className='row__posters'>
				{movies.map((movie) => {
					return (
						<img
							key={movie.id}
							onClick={() => handleClick(movie)}
							className={`row__poster ${isLargeRow && `row__posterLarge`}`}
							src={`${baseUrl}${
								isLargeRow ? movie.poster_path : movie.backdrop_path
							}`}
							alt={movie.name}
						/>
					);
				})}
			</div>
			{trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
		</div>
	);
};

export default Row;
