import React, { useState } from 'react';

const SearchBox = ({ onSearch }) => {
	const [searchTerm, setSearchTerm] = useState('');

	const handleInputChange = (event) => {
		console.log(event.target.value);
		setSearchTerm(event.target.value);
	};

	const handleSubmit = (event) => {
		console.log(searchTerm);
		event.preventDefault();
		// onSearch(searchTerm); have to be passed as a prop to the main parent component.
		// this function has to be passed as a prop by the main parent component.
		// this is because the main parent component is the one that calls this function.
		// it is how we send data to main component
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type='text'
				value={searchTerm}
				onChange={handleInputChange}
				placeholder='Search...'
			/>
			<button type='submit'>Search</button>
		</form>
	);
};

export default SearchBox;
