// import { useState } from 'react';
import {
  ContributionCard,
  ContributionImg,
  ContributionContainer,
  ButtonContainer,
  Button,
  Title,
} from "./ContributionCard.styles"

export default function ContributionCards({ contribution }){
  if (!contribution.live){
    return (
      <ContributionCard>
        <ContributionImg src={`${contribution.img}`} />
        <ContributionContainer />
        <ButtonContainer>
          <Title>{contribution.title}</Title>
          <Button href={`${contribution.repo}`}>Repo</Button>
        </ButtonContainer>
      </ContributionCard>
    )
  }
  else if (!contribution.repo){
    return(
      <ContributionCard>
        <ContributionImg src={`${contribution.img}`} />
        <ContributionContainer />
        <ButtonContainer>
          <Title>{contribution.title}</Title>
          <Button href={`${contribution.live}`}>Live</Button>
        </ButtonContainer>
      </ContributionCard>
    )
  }
  else {
  return(
    <ContributionCard>
      <ContributionImg src={`${contribution.img}`} />
      <ContributionContainer />
        <ButtonContainer>
          <Title>{contribution.title}</Title>
          <Button href={`${contribution.live}`}>Live</Button>
          <Button href={`${contribution.repo}`}>Repo</Button>
        </ButtonContainer>
</ContributionCard>
)
  }
}