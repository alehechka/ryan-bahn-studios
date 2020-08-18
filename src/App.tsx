import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
	const refBio = React.createRef();
	const refMyStuff = React.createRef();
	const refInAddition = React.createRef();
	const refGetInTouch = React.createRef();

	const scrollToRef = (ref: React.RefObject<any>) =>
		ref.current.scrollIntoView({
			behavior: 'smooth',
			block: 'start',
		});

	const scrollToRefBio = () => {
		scrollToRef(refBio);
	};

	const scrollToRefMyStuff = () => {
		scrollToRef(refMyStuff);
	};

	const scrollToRefInAddition = () => {
		scrollToRef(refInAddition);
	};

	const scrollToRefGetInTouch = () => {
		scrollToRef(refGetInTouch);
	};

	return (
		<BrowserRouter>
			<Header scrollToRef={scrollToRefBio} />
			<Switch>
				<Route
					exact
					path='/'
					component={() => (
						<Main
							refBio={refBio}
							refMyStuff={refMyStuff}
							refInAddition={refInAddition}
							scrollToRefMyStuff={scrollToRefMyStuff}
							scrollToRefInAddition={scrollToRefInAddition}
							scrollToRefGetInTouch={scrollToRefGetInTouch}
						/>
					)}
				/>
			</Switch>
			<Footer refGetInTouch={refGetInTouch} />
		</BrowserRouter>
	);
}

export default App;
