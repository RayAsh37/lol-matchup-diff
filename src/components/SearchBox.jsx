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
				type='search'
				// text
				value={searchTerm}
				onChange={handleInputChange}
				list='search-options'
				placeholder='Search...'
			/>
			<datalist id='search-options'>
				{/* {console.log(searchList)} */}
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
