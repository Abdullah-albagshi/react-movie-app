import React from 'react';
import { Popover, OverlayTrigger } from 'react-bootstrap';

const MovieDetails = ({ title, overview, release_date, vote_average }) => {
	const popover = (
		<Popover id="popover-basic">
			<Popover.Title as="h3">{title}</Popover.Title>
			<Popover.Content>{overview}</Popover.Content>
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
