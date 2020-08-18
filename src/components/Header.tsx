import React from 'react';
import { IconList, Icon } from './Icons';

interface HeaderProps {
	scrollToRef: () => void;
}

const Header = ({ scrollToRef }: HeaderProps) => {
	return (
		<section id='header'>
			<header className='major'>
				<h1>Ryan Bahn Studios</h1>
				<br />
				<IconList>
					<Icon href='https://www.instagram.com/ryanbahnstudios/' icon='brands fa-instagram' label='Instagram' />
				</IconList>
			</header>
			<div className='container'>
				<ul className='actions special'>
					<li>
						<div onClick={scrollToRef} className='button primary scrolly'>
							Begin
						</div>
					</li>
				</ul>
			</div>
		</section>
	);
};

export const Heading = ({ text }: any) => {
	return (
		<header className='major'>
			<h2>{text}</h2>
		</header>
	);
};

export default Header;
