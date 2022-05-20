import ContributionCard from './ContributionCard';
import { contributionsData } from './contributionsData';
import {
    ContributionsContainer,
    ContributionCardContainer
} from './index.styles'

export default function Contributions() {
	return (
        <ContributionsContainer>
            <h2 className="ps-3 me-5 mb-5">| Contributions</h2>
                <ContributionCardContainer>
                {contributionsData.map((contribution, index) => (
                    <ContributionCard 
                    contribution={contribution} 
                    key={index}/>
        ))}
        </ContributionCardContainer>
        </ContributionsContainer>
    );}