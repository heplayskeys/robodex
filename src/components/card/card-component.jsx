import React from 'react';

const Card = ({ email, name }) => {
	return (
		<div className='tc bg-light-blue ma2 dib br3 grow shadow-5 w-80 w-30-ns pa2 w-80-m'>
			<img
				className='br-100 pa1 ba b--black-10 h4 w4'
				src={`https://robohash.org/${email}?bgset=any`}
				alt={`${name}`}
			/>
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
};

export default Card;
