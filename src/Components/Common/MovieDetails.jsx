import React from 'react';
import { Popover, OverlayTrigger } from 'react-bootstrap';

const MovieDetails = ({ title, overview, release_date }) => {
	const popover = (
		<Popover id="popover-basic">
			<Popover.Title as="h3">{title}</Popover.Title>
			<Popover.Content>{overview.length>=300 ? `${overview.slice(0,300)}...` :overview.length===0 ? "No over view for this movie" : overview}</Popover.Content>
		</Popover>
	);

	return (
		<OverlayTrigger
			trigger={['hover', 'hover']}
			placement="top"
			overlay={popover}
		>
			<div className="details">
				<div className="left">
					<p>{title}</p>
					<p>Release Date: {release_date}</p>
				</div>
			</div>
		</OverlayTrigger>
	);
};

export default MovieDetails;
