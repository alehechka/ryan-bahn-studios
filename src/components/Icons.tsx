import React from 'react';

export const IconList = ({ children }: any) => {
	return <ul className='icons'>{children}</ul>;
};

export const Icon = ({ href, icon, label }: any) => {
	return (
		<li>
			<a href={href} className={`icon alt ${icon}`}>
				<span className='label'>{label}</span>
			</a>
		</li>
	);
};
