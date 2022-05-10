import ContributionCard from './ContributionCard';
import { contributionsData } from './contributionsData';

export default function Contributions() {
	return (
        <div className="contributions-container">
            <h2 className="ps-3 me-5 mb-5">| Contributions</h2>
                <div className='contribution-card-container'>
                {contributionsData.map((contribution, index) => (
                    <ContributionCard 
                    contribution={contribution} 
                    key={index}/>
        ))}
        </div>
        </div>
    );}