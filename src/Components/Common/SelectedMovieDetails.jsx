import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faClock,
	faCalendarAlt,
	faFileAlt,
	faEllipsisV,
} from '@fortawesome/free-solid-svg-icons';

const imgUrl = 'https://image.tmdb.org/t/p/w500/';

const SelectedMovieDetails = ({ movie }) => {
	let getGenre = () => {
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
		if ('episode_run_time' in movie) {
            const time = movie.episode_run_time[0] || movie.episode_run_time[1];
            if (!time){
                return 'Not Available'
            }
			let Hours = Math.floor(time / 60);
			let minutes = time % 60;
			return `${Hours}h ${minutes}min`;
		} else {
			const time = movie.runtime;
			let Hours = Math.floor(time / 60);
			let minutes = time % 60;
			return `${Hours}h ${minutes}min`;
		}
		// const time = movie.runtime || movie.episode_run_time || movie.episode_run_time[1];
		// let Hours = Math.floor(time / 60);
		// let minutes = time % 60;
		// return `${Hours}h ${minutes}min`;
	};
	return (
		<div className="selected-movie-details">
			<h1>{movie.title|| movie.name}</h1>
			<div className="movie-details-text">
				<p>
					<FontAwesomeIcon icon={faClock} className="mr-1" />
					{getTime()}
					<FontAwesomeIcon
						icon={faEllipsisV}
						className="ml-2 d-sm-none d-md-inline-block"
					/>
				</p>
				<p>
					<FontAwesomeIcon icon={faFileAlt} className="mr-2" />
					{getGenre()}
					<FontAwesomeIcon
						icon={faEllipsisV}
						className="ml-2 d-sm-none d-md-inline-block"
					/>
				</p>
				<p>
					<FontAwesomeIcon icon={faCalendarAlt} className="mr-1" />
					{movie.release_date || movie.first_air_date}
				</p>
			</div>
			<p>{movie.overview}</p>
			<div
				className="blur-bg"
				style={{
					backgroundImage: `url(${imgUrl}${movie.backdrop_path})`,
				}}
			></div>
		</div>
	);
};

export default SelectedMovieDetails;
