import React from 'react';

const SearchInput = props => {
	const { setText } = props;
	return (
		<div className='pa2'>
			<input
				className='pa2 ba b--light-blue bg-lightest-blue br2 mb3'
				type='search'
				placeholder='Search Robodex'
				onChange={e => setText(e.target.value)}
			/>
		</div>
	);
};

export default SearchInput;
