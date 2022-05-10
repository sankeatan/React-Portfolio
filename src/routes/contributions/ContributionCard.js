import './index.scss';
// import { useState } from 'react';
import {
  ContributionCard,
  ContributionImg,
  ContributionContainer,
  ContributionDescription,
  ButtonContainer,
  Button,
  Title,
} from "./ContributionCard.styles"

export default function ContributionCards({ contribution }){
    // const [open, setOpen] = useState(false);
    // const handleClick = function (){
    //     setOpen(!open);

    // }
return(
<ContributionCard>
  <ContributionImg src={`${contribution.img}`} />
  <ContributionContainer />
  <ContributionDescription>
     <p>{contribution.desc}</p>
  </ContributionDescription>
  <ButtonContainer>
    <Title>{contribution.title}</Title>
    <Button href={`${contribution.live}`}>Live</Button>
    <Button href={`${contribution.repo}`}>Repo</Button>
  </ButtonContainer>
</ContributionCard>
)
}