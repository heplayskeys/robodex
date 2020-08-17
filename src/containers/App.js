import React, { useState, useEffect } from 'react';
import CardList from '../components/card-list/card-list.component';
import SearchInput from '../components/search-input/search-input.component';
import Scroll from '../components/scroll/scroll-component';
import './App.css';

const App = () => {
	const [text, setText] = useState('');
	const [users, setUsers] = useState([]);

	useEffect(() => {
		const getUsers = () => {
			fetch('https://jsonplaceholder.typicode.com/users')
				.then(res => res.json())
				.then(usersRes => setUsers(usersRes));
		};
		getUsers();
	}, [users]);

	const userArray = text
		? users.filter(user => user.name.toLowerCase().includes(text.toLowerCase()))
		: users;

	return users.length ? (
		<div className='tc'>
			<h1 className='f1'>Robodex</h1>
			<SearchInput setText={setText} />
			<Scroll>
				<CardList users={userArray} />
			</Scroll>
			<h4 className='f5'>&copy; 2020 heplayskeys</h4>
		</div>
	) : (
		<div className='tc'>
			<h1 className='f2'>Loading Robots...</h1>
		</div>
	);
};

export default App;
