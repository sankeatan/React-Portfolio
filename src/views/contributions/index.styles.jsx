import styled from "styled-components";

export const ContributionCardContainer =styled.div 
`{
    display: inline-flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    row-gap: 30px;
}`;

export const ContributionsContainer = styled.div
`{
    font-size: 1.5rem;
    padding-top: 2.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    height: 100vh;
    
    @media only screen and (min-width: 768px){
        padding-top: 5rem;
    }
`;