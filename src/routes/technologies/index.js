import './index.scss'
import TechInfo from './TechInfo';
import { techData } from './techData';

export default function Techonologies() {

	return (
		<div className="technology-container">
			<h2 className="ps-3 me-5">| Technologies</h2>
			<div>
				{techData.map((tech, index) => (
					<TechInfo tech={tech} key={index} />
				))}
			</div>
		</div>
	);
}