import React, { useState, useEffect } from 'react';
import axios from 'axios';

const apiKey = process.env.REACT_APP_API_KEY;

const SelectedMovie = ({ match }) => {
	const movieId = match.params.id;
	const apiURL = `https://api.themoviedb.org/3/movie/${movieId}?&api_key=${apiKey}`;

	let getMovieDetails = async () => {
		const movie = await axios.get(apiURL);
		const data = movie.data;
		console.log(data);
	};

	useEffect(() => {
		try {
			getMovieDetails();
		} catch (error) {
			console.log(error);
		}
	});

	return (
		<div>
			<h1>{match.params.id}</h1>
			<h4>sdfsdfga</h4>
		</div>
	);
};

export default SelectedMovie;
