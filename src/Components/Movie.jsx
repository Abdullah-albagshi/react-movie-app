import React, { Component } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';

const apiURL =
	'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9e058083ea188da98174ef4a8d1c2f31';

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
