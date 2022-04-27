import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function TechInfo({ tech }) {
	return (
		<div className="d-flex align-items-center my-4">
			<div>
				<FontAwesomeIcon
					icon={tech.icon}
					size="3x"
					className="pe-3 me-3"
				/>
			</div>

			{/* Info */}
			<div>
				<h3 className="m-0 mt-3">{tech.title}</h3>
				<p>{tech.items.join(' | ')}</p>
			</div>
		</div>
	);
}