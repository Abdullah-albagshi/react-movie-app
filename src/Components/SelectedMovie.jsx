import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faClock,
	faCalendarAlt,
	faFileAlt,
	faEllipsisV,
} from '@fortawesome/free-solid-svg-icons';

import ImageContainer from './Common/ImageContainer';
import MovieCarousel from './Common/MovieCarousel';
import MovieRate from './Common/MovieRate';
import SelectedMovieDetails from './Common/SelectedMovieDetails';

const imgUrl = 'https://image.tmdb.org/t/p/w500/';
const apiKey = process.env.REACT_APP_API_KEY;

const SelectedMovie = ({ match }) => {
	const movieId = match.params.id;
	const apiURL = `https://api.themoviedb.org/3/movie/${movieId}?&api_key=${apiKey}`;

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

	let getGenre = () => {
		console.log(movie.genres);
		const movieGenres = movie.genres;
		const genres = [];
		try {
			if (!movieGenres) return;
			movieGenres.forEach((genre) => {
				genres.push(genre.name);
			});
		} catch (error) {
			console.log(error);
		}
		if (!genres) return;
		return genres.join(', ');
	};

	let getTime = () => {
		console.log(movie.runtime);
		const time = movie.runtime;
		let Hours = Math.floor(time / 60);
		let minutes = time % 60;
		return `${Hours}h ${minutes}min`;
	};
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
                <SelectedMovieDetails movie={movie}/>
				{/* <div className="selected-movie-details">
					<h1>{movie.title}</h1>
					<div className="movie-details-text">
						<p>
							<FontAwesomeIcon icon={faClock} className="mr-1" />
							{getTime()}
                        <FontAwesomeIcon icon={faEllipsisV} className="ml-2 d-sm-none d-md-inline-block" />

						</p>
						<p>
							<FontAwesomeIcon
								icon={faFileAlt}
								className="mr-2"
							/>
							{getGenre()}
                        <FontAwesomeIcon icon={faEllipsisV} className="ml-2 d-sm-none d-md-inline-block" />
						</p>

						<p>
							<FontAwesomeIcon
								icon={faCalendarAlt}
								className="mr-1"
							/>
							{movie.release_date}
						</p>
					</div>
					<p>{movie.overview}</p>
					<div
						className="blur-bg"
						style={{
							backgroundImage: `url(${imgUrl}${movie.backdrop_path})`,
						}}
					></div>
				</div> */}
			</div>
			<MovieCarousel className="carousel-component" movieId={movieId} />

			{/* <div className="backdrop-img">
				<img
					src={`${imgUrl}${movie.backdrop_path}`}
					alt={`${movie.title}`}
				/>
			</div> */}
		</div>
	);
};

export default SelectedMovie;
