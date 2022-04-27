import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.scss';

export default function Contact() {
	return (
		<div className="contact-container">
			<h2 className="ps-3 me-5">| Contact</h2>

				<p>
					I don't bite!
					Send me an email at{' '}
					<a
						href="mailto:cameron.clark1110@gmail.com"
						target="_blank"
						rel="noreferrer"
						title="cameron.clark1110@gmail.com"
						className="custom-paragraph-link"
					>
						cameron.clark1110@gmail.com
					</a>{' '}
					or give me a call or text at{' '}
					<a
						href="tel:407-529-4690"
						target="_blank"
						rel="noreferrer"
						title="(407) 529-4690"
						className="custom-paragraph-link"
					>
						(407) 529-4690
					</a>
				</p>

			<div className="section-content container d-flex justify-content-center">
				{/* Github link */}
				<a
					href="https://github.com/sankeatan"
					target="_blank"
					rel="noreferrer"
					title="https://github.com/sankeatan"
				>
					<FontAwesomeIcon
						icon={['fab', 'github']}
						size="3x"
						className="p-2 mx-2 text-dark custom-icon"
					/>
				</a>

				{/* LinkedIn link */}
				<a
					href="https://www.linkedin.com/in/cameronclark1110/"
					target="_blank"
					rel="noreferrer"
					title="https://www.linkedin.com/in/cameronclark1110/"
				>
					<FontAwesomeIcon
						icon={['fab', 'linkedin-in']}
						size="3x"
						className="p-2 mx-2 text-dark custom-icon"
					/>
				</a>

				{/* Mail link */}
				<a
					href="mailto:cameron.clark1110@gmail.com"
					target="_blank"
					rel="noreferrer"
					title="cameron.clark1110@gmail.com"
				>
					<FontAwesomeIcon
						icon={'envelope'}
						size="3x"
						className="p-2 mx-2 text-dark custom-icon"
					/>
				</a>

				{/* Phone link */}
				<a
					href="tel:407-529-4690"
					target="_blank"
					rel="noreferrer"
					title="(407) 529-4690"
				>
					<FontAwesomeIcon
						icon={'phone'}
						size="3x"
						className="p-2 mx-2 text-dark custom-icon"
					/>
				</a>
			</div>
		</div>
	);
}