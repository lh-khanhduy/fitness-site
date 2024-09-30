import AboutUs from './components/AboutUs';
import FirstWord from './components/FirstWord';
import HeaderBar from './components/HeaderBar';
import Offer from './components/Offer';
import Overview from './components/Overview';
import Services from './components/Services';

const App = () => {
	return (
		<main>
			<HeaderBar />
			<FirstWord />
			<Overview />
			<Services />
			<Offer />
			<AboutUs />
		</main>
	);
};

export default App;
