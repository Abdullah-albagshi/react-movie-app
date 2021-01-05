import React, { Component } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';
import Paginate from './Common/Paginate';

const apiKey = process.env.REACT_APP_API_KEY;
const words = [
	process.env.REACT_APP_WORD_1,
	process.env.REACT_APP_WORD_2,
	process.env.REACT_APP_WORD_3,
];

export default class movie extends Component {
	constructor() {
		super();
		this.state = {
			moviesObj: [],
			pageNum: 1,
		};
	}
	apiURL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${apiKey}&page=`;

	async getMovies() {
		const movies = await axios.get(this.apiURL + this.state.pageNum);
		const moviesData = movies.data.results;
		this.setState({ moviesObj: moviesData });
	}

	async componentDidMount() {
		const pageNumber = JSON.parse(localStorage.getItem('savedPageNumber'));
		this.setState({ pageNum: pageNumber }, () => {
			try {
				this.getMovies();
			} catch (error) {
				console.log(error);
			}
		});
	}

	componentWillUnmount() {
		localStorage.setItem(
			'savedPageNumber',
			JSON.stringify(this.state.pageNum)
		);
	}

	handelNext = (page = null) => {
		if (!page) {
			this.setState({ pageNum: ++this.state.pageNum });
			this.getMovies();
		} else if (page) {
			this.setState({ pageNum: page }, () => {
				this.getMovies();
			});
		}
	};

	handelPrev = (page = null) => {
		if (!page) {
			console.log(page);
			this.setState({ pageNum: --this.state.pageNum });
			this.getMovies();
		} else if (page) {
			this.setState({ pageNum: page }, () => {
				console.log(this.state.pageNum);
				this.getMovies();
			});
		}
	};

	isDisabled = () => {
		if (this.state.pageNum === 1) return true;
	};
	render() {
		return (
			<>
				<div className="row d-flex justify-content-around">
					{this.state.moviesObj.map((movie) => {
						if (
							movie.overview.includes('sex') ||
							movie.overview.includes('romance') ||
							movie.title.toLowerCase().includes(words[0]) ||
							movie.title.toLowerCase().includes(words[1]) ||
							movie.title.toLowerCase().includes(words[2]) ||
							movie.genre_ids.indexOf(10749) >= 0
						)
							return null;
						else return <MovieCard key={movie.id} {...movie} />;
					})}
				</div>
				<Paginate
					pageNum={this.state.pageNum}
					handelNext={this.handelNext}
					handelPrev={this.handelPrev}
					disabled={this.isDisabled}
				/>
			</>
		);
	}
}
