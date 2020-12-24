import React from 'react';
import {
	Popover,
	OverlayTrigger,
	PopoverTitle,
	PopoverContent,
	Tooltip,
	Overlay,
} from 'react-bootstrap';
const imgUrl = 'https://image.tmdb.org/t/p/w500/';

const MovieCard = ({
	title,
	release_date,
	poster_path,
	vote_avg,
	overview,
}) => {
	const popover = (
		<Popover id="popover-basic">
			<Popover.Title as="h3">{title}</Popover.Title>
			<Popover.Content>{overview}</Popover.Content>
		</Popover>
	);

	return (
		<div className="card__body col-lg-3 col-md-4 col-sm-6 ">
			<div className="movie-card">
				<img src={`${imgUrl}${poster_path}`} alt={`${title}`} />
				<OverlayTrigger
					trigger="hover"
					placement="top"
					overlay={popover}
				>
					<div className="details">
						<p>{title}</p>
						<p>Release Date: {release_date}</p>
					</div>
				</OverlayTrigger>
			</div>
		</div>
	);
};

export default MovieCard;
