import styled, { keyframes } from "styled-components";
const primaryColor = '#63A46C';
const secondaryColor = '#FED766';
const tertiaryColor = '#86BBD8';

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

export const NavContainer = styled.div`
{
    right: 0rem;
    position: absolute;
    display:flex;
    flex-direction: row;
    justify-content:center;
    background-color: ${secondaryColor};
    width: 100%;
    height: 30%;
    @media only screen and (min-width: 768px) {
      height: 100vh;
      width: 30%;
      flex-direction: none;
      }
}
`;

export const Portrait = styled.img`
{
  position: relative;
  top: 25px;
  height: 150px;
	width: 150px;
	border-radius: 100%;
	box-shadow: 5px 5px 15px #000001e5;
  @media only screen and (min-width: 768px) {
    height: 200px;
    width: 200px;
    top: 5px;
    }
}
`;

export const Name = styled.h1`
{
  position: absolute;
  top: 11rem;
  font-family: 'Staatliches', cursive;
  display: flex;
  @media only screen and (min-width: 768px) {
    top: 13rem;
    }
}
`;

export const CustomIconContainer = styled.div`
{
  position: absolute;
  flex-direction: column;
  left: 5rem;
  top: 0.5rem;
  @media only screen and (min-width: 768px)
  {
    position: relative;
    flex-direction: column;
    top: 1rem;
    left: 0rem;
    }
}`;

export const CustomIcon = styled.a`
{
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 300;
  font-padding: 0px;
  font-margin: 0px;
  display: flex;
  @media only screen and (min-width: 768px)
  {
    display: flex
    font-weight: 300;
  }
}
`;

export const ButtonContainer = styled.div`
{
    position: absolute;
    left: 30rem;
    display:flex;
    flex-direction:row;
    flex-wrap: wrap;
    top: 1rem;
    @media only screen and (min-width: 768px)
    {
    flex-direction:column;
    top: 18rem;
    }
}`;

export const CustomButton = styled.div`
{
  background-color: ${tertiaryColor};
	color: #000000;
	text-decoration: none;
	display: none;
	font-family: 'Space Grotesk', sans-serif;
	font-size: 1.5rem;
	font-weight: 300;
	padding: 1rem;
	margin: 1rem;
	border-radius: 10px;
	width: 200px;
  text-align: center;
  
  &:hover, click {
    background-color: ${primaryColor};
    animation: ${shadowPulse} 1s infinite;
  }

  @media only screen and (min-width: 768px)
  {
  background-color: ${tertiaryColor};
	color: #000000;
	text-decoration: none;
	display: block;
	font-family: 'Space Grotesk', sans-serif;
	font-size: 1.5rem;
	font-weight: 300;
	padding: 1rem;
	margin: 1rem;
	border-radius: 10px;
	width: 200px;
  text-align: center;
    }
}
`;

