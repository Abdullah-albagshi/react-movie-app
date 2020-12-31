import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Movie from './Components/Movie';
import SelectedMovie from './Components/SelectedMovie';
import NavbarComponent from './Components/NavbarComponent';
import TopMovies from './Components/TopMovies';

function App() {
	return (
		<>
			<NavbarComponent />
			<div className="container-fluid  mt-4">
				<Switch>
					<Route exact path="/" component={Movie} />
					<Route exact path="/movie/:id" component={SelectedMovie} />
					<Route exact path="/top-rated" component={TopMovies} />
				</Switch>
			</div>
		</>
	);
}

export default App;
