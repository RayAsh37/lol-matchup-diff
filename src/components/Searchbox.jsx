import React, { useEffect, useState } from 'react';

const Searchbox = ({ searchList, onSearch }) => {
	const [searchTerm, setSearchTerm] = useState('');

	const handleInputChange = (event) => {
		setSearchTerm(event.target.value);
		onSearch(event.target.value);
	};

	useEffect(() => {
		// Update the component when the searchList prop changes
		setSearchTerm(''); // Reset the searchTerm
	}, [searchList]);

	return (
		<>
			<select
				value={searchTerm}
				onChange={handleInputChange}>
				<option value=''>Select...</option>
				{searchList.map((option) => (
					<option
						key={option}
						value={option}>
						{option}
					</option>
				))}
			</select>
		</>
	);
};

export default Searchbox;
