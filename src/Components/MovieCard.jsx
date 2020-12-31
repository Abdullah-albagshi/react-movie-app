import React, { useEffect } from 'react';
import AOS from 'aos';
import ImageContainer from './Common/ImageContainer';
import MovieDetails from './Common/MovieDetails';
import MovieRate from './Common/MovieRate';
import { Link } from 'react-router-dom';

const MovieCard = ({
	title,
	release_date,
	poster_path,
	vote_average,
	overview,
	id,
}) => {
	// useEffect(() => {
	// 	AOS.init();
	// 	AOS.refresh();
	// });
	return (
		<div>
			<Link to={`/movie/${id}`}>
				<div className="card__body col-lg-3 col-md-4 col-sm-6 ">
					<div className="movie-card">
						<MovieRate vote_average={vote_average} />
						<ImageContainer
							poster_path={poster_path}
							title={title}
						/>
						<MovieDetails
							title={title}
							release_date={release_date}
							overview={overview}
						/>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default MovieCard;
