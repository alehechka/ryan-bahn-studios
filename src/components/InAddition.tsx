import React from 'react';
import SectionContainer from './Containers';
import { Heading } from './Header';

interface AdditionProps {
	refInAddition: React.RefObject<any>;
	scrollToRef: () => void;
}

const InAddition = ({ refInAddition, scrollToRef }: AdditionProps) => {
	return (
		<SectionContainer
			reference={refInAddition}
			id='inaddition'
			special={true}
			src='images/EOS-M50.jpeg'
			scrollToRef={scrollToRef}
		>
			<>
				<Heading text='In Addition' />
				<p>
					Although portraiture is what I've done the most, I am more than capable of other services: <br />
					<br /> Product Photos &amp; Videos
					<br />
					<br /> Advertisement Photos &amp; Videos
					<br />
					<br /> Optimized Social Media Posts
					<br />
					<br /> If there's something you want done, always feel free to ask!
				</p>
			</>
		</SectionContainer>
	);
};

export default InAddition;
