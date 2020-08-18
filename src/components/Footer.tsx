import React from 'react';
import { IconList, Icon } from './Icons';
import MessageForm from './MessageForm';

interface FooterProps {
	refGetInTouch: React.RefObject<any>;
}

const Footer = ({ refGetInTouch }: FooterProps) => {
	return (
		<section id='footer' ref={refGetInTouch}>
			<div className='container'>
				<MessageForm />
			</div>
			<footer>
				<IconList>
					<Icon href='https://www.instagram.com/ryanbahnstudios/' icon='brands fa-instagram' label='Instagram' />
					<Icon href='mailto: ryanbahnstudios@gmail.com' icon='solid fa-envelope' label='Email' />
				</IconList>
				<ul className='copyright'>
					<li>&copy; RyanBahnStudios</li>
				</ul>
			</footer>
		</section>
	);
};

export default Footer;
