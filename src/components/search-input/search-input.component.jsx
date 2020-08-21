import React from 'react';
import { connect } from 'react-redux';
import { setSearchField } from '../../redux/search/search.actions';

const SearchInput = props => {
	const { setText } = props;
	return (
		<div className='pa2'>
			<input
				className='pa2 ba b--light-blue bg-lightest-blue br2 mb3'
				type='search'
				placeholder='Search Robodex'
				onChange={setText}
			/>
		</div>
	);
};

const mapDispatchToProps = dispatch => ({
	setText: e => dispatch(setSearchField(e.target.value))
});

export default connect(null, mapDispatchToProps)(SearchInput);
