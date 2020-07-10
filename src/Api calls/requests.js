const instance = "https://api.themoviedb.org/3";
const API_KEY = "05698e653b8026c4910f82b3921b5e0d";

const requests = {
	fetchTrending: `${instance}/trending/all/week?api_key=${API_KEY}&language=en-US`,
	fetchNetflixOriginals: `${instance}/discover/tv?api_key=${API_KEY}&with_networls=213`,
	fetchTopRated: `${instance}/movie/top_rated?api_key=${API_KEY}&language=en-UK`,
	fetchActionMovies: `${instance}/discover/movie?api_key=${API_KEY}&with_genres=28`,
	fetchComedyMovies: `${instance}/discover/movie?api_key=${API_KEY}&with_genres=35`,
	fetchDramaMovies: `${instance}/discover/movie?api_key=${API_KEY}&with_genres=18`,
	fetchHorrorMovies: `${instance}/discover/movie?api_key=${API_KEY}&with_genres=27`,
	fetchRomanceMovies: `${instance}/discover/movie?api_key=${API_KEY}&with_genres=10749`,
	fetchThrillerMovies: `${instance}/discover/movie?api_key=${API_KEY}&with_genres=53`,
};

export default requests;
