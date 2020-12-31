import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';

const apiKey = process.env.REACT_APP_API_KEY;

const apiURL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`;

const TopMovies = () => {
	const [topMovie, setTopMovie] = useState([]);

	let getMovieDetails = async () => {
		const movie = await axios.get(apiURL);
		const movieData = movie.data.results;
		console.log(movieData);
		setTopMovie(movieData);
	};

	useEffect(() => {
		try {
			getMovieDetails();
		} catch (error) {
			console.log(error);
		}
	}, []);

	return (
		<div className="row d-flex justify-content-around">
			{topMovie.map((movie) => (
				<MovieCard key={movie.id} {...movie} />
			))}
		</div>
	);
};

export default TopMovies;
