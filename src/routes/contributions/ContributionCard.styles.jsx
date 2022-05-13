import styled, { keyframes } from "styled-components";

const shadowPulse = keyframes`
{
0% {
    box-shadow: 0 0 0 0px rgba(0, 0, 0, 0.2);
  }
100% {
    box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
  }
}
`;

export const Title = styled.h2`
    display: block;
    position: relative;
    color: #86BBD8;
    font-weight: 600;
    z-index: 10;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
`;

export const Button = styled.a`
    position: relative;
    background-color: #86BBD8;
    padding: 1px 2px;
    border-radius: 5px;
    right: 10px;
    top: 25px;
    height: 35px;
    width: 75px;
    display: none;
    text-align: center;
    text-decoration: none;
    color: black;
    z-index: 1;

    &:hover {
        animation: ${shadowPulse} 1s infinite;
        background-color: #63A46C;
      }
`;

export const ContributionDescription = styled.div`
    display: none;
    position: absolute;
    color: #fff;
    font-weight: 100;
    font-size: 20px;
    left: 20px;
    bottom: 10%;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
`;

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

    &:hover ${Title} {
        display: none;
      }
    &:hover ${Button} {
        display: block;
      }
`;

export const ContributionImg = styled.img`
    height: 75%
    border-radius: 0px;<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
    </head>
    <body>
        
    </body>
    </html>
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



export const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    position: relative;
    align-items: center;
    left: 10px;
    bottom: 130px;
`;





