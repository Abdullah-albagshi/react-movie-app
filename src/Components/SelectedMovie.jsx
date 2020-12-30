import React, { useState, useEffect } from 'react';
import axios from 'axios';

const imgUrl = 'https://image.tmdb.org/t/p/w500/';
const apiKey = process.env.REACT_APP_API_KEY;

const SelectedMovie = ({ match }) => {
	const movieId = match.params.id;
	const apiURL = `https://api.themoviedb.org/3/movie/${movieId}?&api_key=${apiKey}`;

    const [movie , setMovie] = useState({})

	let getMovieDetails = async () => {
		const movie = await axios.get(apiURL);
		const movieData = movie.data;
        console.log(movieData);
        setMovie(movieData)
	};

	useEffect(() => {
		try {
			getMovieDetails();
		} catch (error) {
			console.log(error);
		}
	},[]);

	return (
		<div>
			<h1 className='details'>{movie.overview}</h1>
            <img src={`${imgUrl}${movie.backdrop_path}`} alt=""/>
		</div>
	);
};

export default SelectedMovie;
