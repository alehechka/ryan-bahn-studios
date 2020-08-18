import React from 'react';
import Biography from './Biography';
import MyStuff from './MyStuff';
import InAddition from './InAddition';

interface MainProps {
	refBio: React.RefObject<any>;
	refInAddition: React.RefObject<any>;
	refMyStuff: React.RefObject<any>;
	scrollToRefMyStuff: () => void;
	scrollToRefInAddition: () => void;
	scrollToRefGetInTouch: () => void;
}

const Main = ({
	refBio,
	refInAddition,
	refMyStuff,
	scrollToRefMyStuff,
	scrollToRefInAddition,
	scrollToRefGetInTouch,
}: MainProps) => {
	return (
		<>
			<Biography refBio={refBio} scrollToRef={scrollToRefMyStuff} />
			<MyStuff refMyStuff={refMyStuff} scrollToRef={scrollToRefInAddition} />
			<InAddition refInAddition={refInAddition} scrollToRef={scrollToRefGetInTouch} />
		</>
	);
};

export default Main;
