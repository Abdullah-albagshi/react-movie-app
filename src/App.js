import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Movie from './Components/Movie';
import SelectedMovie from './Components/SelectedMovie';
import NavbarComponent from './Components/NavbarComponent';

function App() {
	return (
		<>
			<NavbarComponent />
			<div className="container-fluid  mt-4">
				<Switch>
					<Route exact path="/" component={Movie} />
					<Route path="/movie/:id" component={SelectedMovie} />
				</Switch>
			</div>
		</>
	);
}

export default App;
