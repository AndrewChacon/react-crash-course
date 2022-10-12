import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title }) => {
	return (
		<header className='header'>
			<h1>{title}</h1>
			<Button color='green' text='Add' />
		</header>
	);
};

export default Header;

Header.propTypes = {
	title: PropTypes.string,
};

Header.defaultProps = {
	title: 'Task Tracker',
};

// const headingStyles = {
//     color: 'red',
//     backgroundColor: 'black'
// }
