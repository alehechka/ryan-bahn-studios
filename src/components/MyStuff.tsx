import React from 'react';
import { Heading } from './Header';
import SectionContainer, { Image, ImageLeft, ImageRight } from './Containers';

interface MyStuffProps {
	refMyStuff: React.RefObject<any>;
	scrollToRef: () => void;
}

const MyStuff = ({ refMyStuff, scrollToRef }: MyStuffProps) => {
	return (
		<SectionContainer reference={refMyStuff} id='mystuff' src='images/IMG_0240-Edit.jpg' scrollToRef={scrollToRef}>
			<section>
				<Heading text='My Stuff' />
				<Image src='images/IMG_0935-Edit.jpg' />
				<Image src='images/IMG_0240-Edit.jpg' />
				<Image src='images/IMG_0916-Edit-2.jpg' />
				<h5>Unedited(Left) &amp; Edited(Right)</h5>
				<p>
					<ImageLeft src='images/IMG_1071.jpg' />
					FOR PORTRAITS, I like to take my clients to locations I have scouted and that I know will create an
					interesting and unique photograph--of course I'm always open to client suggestions, as well! If you're
					confident in front of a camera, great! I am more than happy to let my clients take the reigns with their own
					poses. If you're camera shy, don't worry. It's totally normal to need direction with posing, and I am
					completely comfortable giving tips and instructions so we can get your best shot!{' '}
				</p>
				<p>
					<ImageRight src='images/ElliePic.jpg' />
					AFTER A PORTRAIT SESSION, I use both Adobe Lightroom and Photoshop for: <br />
					<br />
					COLOR CORRECTIONS <br />
					FACIAL BLEMISH REMOVAL <br />
					MAKE-UP ADDITION <br />
					WRINKLE REMOVAL <br />
					ETC. <br />
					<br />
					Obviously, no one wants an over-edited portrait where they look like a mannequin, but don't worry, all of my
					edits are done in a tasteful manner to create natural-feeling photos where you look your best.
				</p>
			</section>
		</SectionContainer>
	);
};

export default MyStuff;
