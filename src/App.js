import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import { Switch, Route } from 'react-router-dom';
import News from './components/pages/News';
import Contacts from './components/pages/Contacts';
import Details from './components/pages/Details';
import NotFoundPage from './components/pages/NotFoundPage';
import Home from './components/pages/Home';
import Carousle from './components/layouts/Carousle';
import { UserContext } from './UserContext';
import { placeInfo, reviews, detailInfo, news } from './data';

function App() {
	const [ value, setValue ] = useState([ placeInfo, reviews, detailInfo, news ]);
	const [ clickId, setClickId ] = useState(null);
	console.log(clickId);
	return (
		<UserContext.Provider value={{ value, setValue, clickId, setClickId }}>
			<div className="">
				<Navbar />
				<Carousle />

				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/news" component={News} />
					<Route path="/contacts" component={Contacts} />
					<Route path="/details" component={Details} />
					<Route component={NotFoundPage} />
				</Switch>

				<Footer />
			</div>
		</UserContext.Provider>
	);
}

export default App;
