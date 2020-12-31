import React from 'react';

const MovieRate = ({ vote_average, vote_count = null ,  defClass='rate'}) => {
	return (
		<div className={defClass}>
			<span
				className={`badge badge-pill ${
					vote_average >= 7.5
						? 'badge-success'
						: vote_average >= 5.5
						? 'badge-warning'
						: 'badge-danger'
				}`}
			>
				{vote_average}
			</span>
		</div>
	);
};

export default MovieRate;
