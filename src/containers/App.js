import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/card-list/card-list.component';
import SearchInput from '../components/search-input/search-input.component';
import Scroll from '../components/scroll/scroll-component';
import ErrorBoundary from '../components/error-boundary/error-boundary.component';
import { requestRobots } from '../redux/robots/robots.actions';
import './App.css';

const App = props => {
	const { text, users, isPending, getRobotUsers } = props;

	useEffect(() => {
		getRobotUsers();
	}, [getRobotUsers]);

	const userArray = text
		? users.filter(user => user.name.toLowerCase().includes(text.toLowerCase()))
		: users;

	return !isPending ? (
		<div className='tc'>
			<h1 className='f1'>Robodex</h1>
			<SearchInput />
			<Scroll>
				<ErrorBoundary>
					<CardList users={userArray} />
				</ErrorBoundary>
			</Scroll>
			<h4 className='f5'>&copy; 2020 heplayskeys</h4>
		</div>
	) : (
		<div className='tc'>
			<h1 className='f2'>Loading Robots...</h1>
		</div>
	);
};

const mapStateToProps = state => ({
	text: state.search.text,
	users: state.getRobots.users,
	isPending: state.getRobots.isPending,
	error: state.getRobots.error
});

const mapDispatchToProps = dispatch => ({
	getRobotUsers: () => dispatch(requestRobots())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
