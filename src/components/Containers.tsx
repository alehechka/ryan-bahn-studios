import React from 'react';

interface ImageProps {
	src: string;
}

interface SectionProps extends ImageProps {
	children: any;
	id: string;
	special?: boolean;
	reference: React.RefObject<any>;
	scrollToRef: () => void;
}

const SectionContainer = ({ children, id, special, reference, src, scrollToRef }: SectionProps) => {
	return (
		<section ref={reference} id={id} className={special ? 'main special' : 'main'}>
			<div className='container'>
				<BackgroundImage src={src} />
				<div className='content'>{children}</div>
			</div>
			<div onClick={scrollToRef} className='goto-next scrolly'>
				Next
			</div>
		</section>
	);
};

export const BackgroundImage = ({ src }: ImageProps) => {
	return (
		<span className='image fit primary'>
			<img src={src} alt='' />
		</span>
	);
};

export const Image = ({ src }: ImageProps) => {
	return (
		<div className='col-4'>
			<span className='image fit'>
				<img src={src} alt='' />
			</span>
		</div>
	);
};

export const ImageLeft = ({ src }: ImageProps) => {
	return (
		<span className='image left'>
			<img src={src} alt='' />
		</span>
	);
};

export const ImageRight = ({ src }: ImageProps) => {
	return (
		<span className='image right'>
			<img src={src} alt='' />
		</span>
	);
};

export default SectionContainer;
