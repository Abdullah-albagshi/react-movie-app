import React, { Component } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';

const apiKey = process.env.REACT_APP_API_KEY;

const apiURL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${apiKey}`;

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
				{this.state.moviesObj.map((movie) => {
                if (movie.overview.includes('sex') || movie.overview.includes('romance') || movie.genre_ids[0]===10749) return null;
                else return <MovieCard key={movie.id} {...movie} />;
				})}
			</div>
		);
	}
}


