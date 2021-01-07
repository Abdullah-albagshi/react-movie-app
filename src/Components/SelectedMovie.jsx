import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ImageContainer from './Common/ImageContainer';
import MovieCarousel from './Common/MovieCarousel';
import MovieRate from './Common/MovieRate';
import SelectedMovieDetails from './Common/SelectedMovieDetails';

const apiKey = process.env.REACT_APP_API_KEY;

const SelectedMovie = ({ match }) => {
	let typeOf = 'movie';
	if (match.params.mediaType === 'tv' || match.path.includes('tv') ) {
		typeOf = 'tv';
	}
	const movieId = match.params.id;
	const apiURL = `https://api.themoviedb.org/3/${typeOf}/${movieId}?&api_key=${apiKey}`;

	const [movie, setMovie] = useState({});

	let getMovieDetails = async () => {
		const fetchMovie = await axios.get(apiURL);
		const movieData = fetchMovie.data;
		setMovie(movieData);
	};

	useEffect(() => {
        try {
            getMovieDetails();
		} catch (error) {
			console.log(error);
		}
	}, []);

	return (
		<div className="selected-movie-card">
			<div className="selected-movie-container">
				<div className="poster-container">
					<ImageContainer
						poster_path={movie.poster_path}
						title={movie.title}
						defClass="picked-movie"
					/>
					<MovieRate
						vote_average={movie.vote_average}
						vote_count={movie.vote_count}
						defClass={'selected-rate'}
					/>
				</div>
				<SelectedMovieDetails movie={movie} />
			</div>
			<MovieCarousel className="carousel-component" movieId={movieId} typeOf={typeOf} />
		</div>
	);
};

export default SelectedMovie;
