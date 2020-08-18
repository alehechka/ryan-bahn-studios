import React from 'react';
import { useForm } from 'react-hook-form';
import { Heading } from './Header';

const ryanEmail = 'ryanbahnstudios@gmail.com';

const toEmails = [ryanEmail];

const mailto = toEmails.reduce((acc, email) => `${email}; ${acc}`, '');

const EmailForm = () => {
	const { handleSubmit, register } = useForm();

	const openEmailClient = ({ name, subject, message }: any) => {
		setTimeout(() => {
			window.open(`mailto:${mailto}?subject=${subject}&body=Hi, this is ${name}. \n${message}`);
		}, 320);
	};

	return (
		<form onSubmit={handleSubmit(openEmailClient)}>
			<div className='row gtr-uniform'>
				<div className='col-6 col-12-xsmall'>
					<input type='text' name='name' placeholder='Name' ref={register} />
				</div>
				<div className='col-6 col-12-xsmall'>
					<input type='text' name='subject' placeholder='Subject' ref={register} />
				</div>
				<div className='col-12'>
					<textarea name='message' placeholder='Message' ref={register} rows={6}></textarea>
				</div>
				<div className='col-12'>
					<ul className='actions special'>
						<li>
							<input type='submit' value='Send Message' className='primary' />
						</li>
					</ul>
				</div>
			</div>
		</form>
	);
};

const MessageForm = () => {
	return (
		<>
			<Heading text='Get In Touch' />
			<EmailForm />
		</>
	);
};

export default MessageForm;
