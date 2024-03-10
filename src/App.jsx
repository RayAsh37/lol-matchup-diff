import { useEffect, useState } from 'react';
// import reactLogo from './assets/react.svg'
import './App.css';
import Searchbox from './components/Searchbox.jsx';

function App() {
	//set version list
	const [versionList, setVersionList] = useState([]);
	//set version
	const [version, setVersion] = useState(0);
	//set items
	const [items, setItems] = useState([]);
	//set champion
	const [champions, setChampions] = useState([]);

	useEffect(() => {
		fetch('https://ddragon.leagueoflegends.com/api/versions.json')
			.then((response) => response.json())
			.then((data) => {
				setVersionList(data);
				setVersion(data[0]);
			});
	}, []);

	return (
		<>
			<h1>lol-matchup-diff</h1>
			<Searchbox
				searchList={versionList}
				onSearch={setVersion}
			/>
			<p>version: {version}</p>
		</>
	);
}

export default App;
