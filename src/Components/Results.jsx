import React, { Component } from 'react';

import MovieCard from './MovieCard';

class Results extends Component {
	constructor(props) {
		super(props);
		if (this.props.location.state) {
			this.state = {
				sResults: this.props.location.state.result,
			};
		} else {
			this.state = {
				sResults: [],
			};
		}
	}

	static getDerivedStateFromProps(nextProps, prevState) {
		return {
			sResults: nextProps.location.state.result,
		};
	}

	render() {
		return (
			<div className="row d-flex justify-content-around">
				{this.state.sResults.length > 0 ? (
					this.state.sResults.map((movie) => {
						if (
							movie.media_type === 'movie' ||
							movie.media_type === 'tv'
						) {
							if (
								movie.overview.includes('sex') ||
								movie.overview.includes('romance') ||
								movie.genre_ids.indexOf(10749) >= 0
							)
								return null;
							else
								return (
									<MovieCard
										key={movie.id}
										{...movie}
										linkPath={'results'}
										mediaType={movie.media_type}
									/>
								);
						} else return null;
					})
				) : (
					<h1 className="alert-danger badge-pill">
						No search Input{' '}
					</h1>
				)}
			</div>
		);
	}
}

export default Results;
