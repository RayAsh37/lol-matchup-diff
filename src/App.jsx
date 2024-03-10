import { useEffect, useState } from 'react';
// import reactLogo from './assets/react.svg'
import './App.css';
import Searchbox from './components/Searchbox.jsx';

function App() {
	//set version list
	const [versionList, setVersionList] = useState([]);
	//set version
	const [version, setVersion] = useState(0);
	//set runes
	const [runesList, setRunesList] = useState([]);
	//set items
	const [itemsList, setItemsList] = useState([]);
	//set championList
	const [championsList, setChampionsList] = useState([]);
	// set champion
	const [champion1, setChampion1] = useState('');
	const [champion2, setChampion2] = useState('');

	//set versionList and version
	useEffect(() => {
		fetch('https://ddragon.leagueoflegends.com/api/versions.json')
			.then((response) => response.json())
			.then((data) => {
				setVersionList(data);
				setVersion(data[0]);
			});
	}, []);

	// set runesList
	useEffect(() => {
		fetch(
			`https://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/runesReforged.json`
		)
			.then((response) => response.json())
			.then((data) => {
				setRunesList(data);
			});
	}, [version]);

	// set itemsList
	useEffect(() => {
		fetch(
			`https://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/item.json`
		)
			.then((response) => response.json())
			.then((data) => {
				setItemsList(data);
			});
	}, [version]);

	// set championList
	useEffect(() => {
		fetch(
			`https://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/champion.json`
		)
			.then((response) => response.json())
			.then((data) => {
				setChampionsList(Object.keys(data.data));
			});
	}, [version]);

	// console.log(runesList);
	// console.log(itemsList);
	console.log(championsList);
	return (
		<>
			<h1>lol-matchup-diff</h1>
			<Searchbox
				searchList={versionList}
				onSearch={setVersion}
			/>
			<p>version: {version || 'version not found'}</p>
			{version && (
				<>
					<Searchbox
						searchList={championsList}
						onSearch={setChampion1}
					/>
					<p>champion1: {champion1 || 'champion not found'}</p>
				</>
			)}
		</>
	);
}

export default App;
