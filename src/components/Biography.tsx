import React from 'react';
import SectionContainer, { Image } from './Containers';
import { Heading } from './Header';

interface BioProps {
	refBio: React.RefObject<any>;
	scrollToRef: () => void;
}

const Biography = ({ refBio, scrollToRef }: BioProps) => {
	return (
		<SectionContainer
			reference={refBio}
			id='bio'
			special={true}
			src='images/IMG_0240-Edit.jpg'
			scrollToRef={scrollToRef}
		>
			<>
				<Heading text='Who I am' />
				<Image src='images/IMG_0318-Edit.jpg' />
				<p>
					I am a photographer and videographer based in Papillion, Nebraska. I've always enjoyed creative hobbies and
					had an appreciation for artistic work I chose to bring my passions to life by studying the principles of
					photography. Through practice and gained experience, I am building a strong portfolio and putting my knowledge
					about photography into action.
				</p>
			</>
		</SectionContainer>
	);
};

export default Biography;
