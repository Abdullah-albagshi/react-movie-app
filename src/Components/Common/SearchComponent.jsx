import axios from 'axios';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

const apiKey = process.env.REACT_APP_API_KEY;

class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {
			results: [],
			query: '',
			number: 1,
		};

		this.submit = this.submit.bind(this);
		this.changeQuery = this.changeQuery.bind(this);
	}

	changeQuery(event) {
		event.preventDefault();
		this.setState({ query: event.target.value });
	}

	reload = () => {
		this.props.history.push('/results');
	};

	async submit(event) {
		event.preventDefault();
		if (
			this.state.query !== '' &&
			this.state.query !== 'porn' &&
			this.state.query !== 'gay' &&
			this.state.query !== 'sex'
		) {
			let url = `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&language=en-US&query=${this.state.query}&page=1&include_adult=false`;
			const resData = await axios.get(url);
			const data = resData.data.results;
			this.setState({ results: data });
			this.setState({ number: ++this.state.number });
		}
	}

	render() {
		return (
			<div className="ml-auto">
				<form onSubmit={this.submit}>
					<input
						type="search"
						onChange={this.changeQuery}
						placeholder="Search for movie , tv show"
					/>
				</form>
				{this.state.results.length >= 1 && (
					<>
						<Redirect
							to={{
								pathname: `/results`,
								state: { result: this.state.results },
							}}
						/>
					</>
				)}
			</div>
		);
	}
}

export default Search;
