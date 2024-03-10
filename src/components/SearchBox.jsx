import React, { useState } from 'react';

const Searchbox = ({ searchList, onSearch }) => {
	const [searchTerm, setSearchTerm] = useState('');

	const handleInputChange = (event) => {
		setSearchTerm(event.target.value);
		onSearch(event.target.value);
	};

	return (
		<>
			<input
				type='text'
				value={searchTerm}
				onChange={handleInputChange}
				list='search-options'
				placeholder='Search...'
			/>
			<datalist id='search-options'>
				{searchList.map((option) => (
					<option
						key={option}
						value={option}
					/>
				))}
			</datalist>
		</>
	);
};

export default Searchbox;
