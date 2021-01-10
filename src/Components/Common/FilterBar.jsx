import React, { useState, useEffect } from 'react';
import axios from 'axios';

const apiKey = process.env.REACT_APP_API_KEY;

const FilterBar = ({ handelFilter }) => {
	const movieGenreUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`;
	const tvGenreUrl = `https://api.themoviedb.org/3/genre/tv/list?api_key=${apiKey}&language=en-US`;

	const [genres, setGenre] = useState([]);
	const [selectedGenres, setSelectedGenres] = useState([]);
	let pathName = () => {
		let path = window.location.pathname.split('/')[1];
		if (path === 'tv') {
			return tvGenreUrl;
		} else if (path === '') {
			return movieGenreUrl;
		}
	};

	let getGeres = async () => {
		let url = pathName();
		const genresFromApi = await axios.get(url);
		const genreData = genresFromApi.data.genres;
		setGenre(genreData);
	};

	useEffect(() => {
		try {
			getGeres();
		} catch (error) {
			console.log(error);
		}
	}, []);

	function handelChange(e) {
		e.target.classList.forEach((className) => {
			if (className === 'btn-outline-primary') {
				setSelectedGenres([...selectedGenres, e.target.dataset.value]);
				e.target.classList.add('btn-primary');
				e.target.classList.remove('btn-outline-primary');
			} else if (className === 'btn-primary') {
				setSelectedGenres(
					selectedGenres.filter((genre) => {
						return genre !== e.target.dataset.value;
					})
				);
				e.target.classList.add('btn-outline-primary');
				e.target.classList.remove('btn-primary');
			}
		});
	}

	return (
		<div className="filter-bar d-flex flex-column">
                <h5>Genre</h5>
                <hr/>
			<div className="filter-bar-group d-flex ">
				{genres.map((genre) => {
					if (genre.id === 10749) return null;
					else
						return (
							<button
								className="filter-btn btn btn-outline-primary"
								onClick={handelChange}
								data-value={genre.id}
							>
								{genre.name}
							</button>
						);
				})}
			</div>
			<button
				className="search-btn btn btn-primary btn-block"
				onClick={() => handelFilter(selectedGenres)}
			>
				Search
			</button>
		</div>
	);
};

export default FilterBar;
