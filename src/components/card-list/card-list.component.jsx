import React from 'react';
import Card from '../card/card-component';

const CardList = ({ users }) => {
	return (
		<div>
			{users.map(user => (
				<Card key={user.id} email={user.email} name={user.name} />
			))}
		</div>
	);
};

export default CardList;
