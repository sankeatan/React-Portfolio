import styled from "styled-components";

export const ContributionCard = styled.div`
    display: inline-block;
    position: relative;
    width: 200px;
    min-width: 200px;
    height: 200px;
    border-radius: 30px;
    overflow: hidden;
    box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.3);
    margin: 30px;
`;

export const ContributionImg = styled.img`
    height: 75%
    border-radius: 0px;
`;

export const ContributionContainer = styled.div`
    background-image: linear-gradient(0deg, #63A46C, #FED766);
    border-radius: 30px;
    position: absolute;
    top: 55%;
    left: -5px;
    height: 65%;
    width: 108%;
    transform: skew(19deg, -9deg);
`;

export const ContributionDescription = styled.div`
    display: block;
    position: absolute;
    color: #fff;
    font-weight: 100;
    font-size: 20px;
    left: 20px;
    bottom: 10%;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
`;

export const Button = styled.a`
    position: relative;
    background-color: #86BBD8;
    padding: 1px 2px;
    border-radius: 5px;
    height: 25px;
    width: 50px;
    display: block;
    text-align: center;
    z-index: 10;
`;

export const Title = styled.h2`
    display: none;
    color: black;
    font-weight: 100;
    z-index: 1;
`;