import React from 'react';
import ImageContainer from './Common/ImageContainer';
import MovieDetails from './Common/MovieDetails';
import MovieRate from './Common/MovieRate';

const MovieCard = ({
	title,
	release_date,
	poster_path,
	vote_average,
	overview,
}) => {

	return (
		<div className="card__body col-lg-3 col-md-4 col-sm-6 ">
			<div className="movie-card">
				<MovieRate vote_average={vote_average} />
				<ImageContainer poster_path={poster_path} title={title} />
				<MovieDetails
					title={title}
					release_date={release_date}
					overview={overview}
					vote_average={vote_average}
				/>
			</div>
		</div>
	);
};

export default MovieCard;
