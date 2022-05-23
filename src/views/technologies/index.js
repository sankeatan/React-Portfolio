import { Technology } from './index.styles';
import TechInfo from './TechInfo';
import { techData } from './techData';

export default function Techonologies() {

	return (
		<Technology>
			<h2 className="ps-3 me-5">| Technologies</h2>
			<div>
				{techData.map((tech, index) => (
					<TechInfo tech={tech} key={index} />
				))}
			</div>
		</Technology>
	);
}