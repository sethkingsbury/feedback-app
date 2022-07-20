import spinner from '../assets/spinner.gif';

function spiner() {
	return (
		<img
			src={spinner}
			alt='Loading...'
			style={{ width: '100px', margin: 'auto', display: 'block' }}
		/>
	);
}

export default spiner;
