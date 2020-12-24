import React, { Component } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';

const apiURL =
	'';

export default class movie extends Component {
	constructor() {
		super();
		this.state = {
			moviesObj: [],
		};
	}

	async getMovies() {
		const movies = await axios.get(apiURL);
		const moviesData = movies.data.results;
		console.log(moviesData);
		this.setState({ moviesObj: moviesData });
	}

	async componentDidMount() {
		try {
			this.getMovies();
		} catch (error) {}
	}
	render() {
		return (
			<div className="row d-flex justify-content-around">
				{this.state.moviesObj.map((movie) => (
					<MovieCard key={movie.id} {...movie} />
				))}
			</div>
		);
	}
}
