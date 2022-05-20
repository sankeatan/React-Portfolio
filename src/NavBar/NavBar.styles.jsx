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
    justify-content:center;
    background-color: ${secondaryColor};
    height: 100vh;
    width: 20rem;
  }
}
`;

export const Portrait = styled.img`
{
  position: absolute;
  height: 200px;
	width: 200px;
	background-size: cover;
  background-position: center;
	border-radius: 100%;
	box-shadow: 5px 5px 15px #000001e5;
}
`;

export const Name = styled.h1`
{
  position: absolute;
  top: 13rem;
  font-family: 'Staatliches', cursive;
}
`;

export const CustomIconContainer = styled.div`
{
  position: absolute;
  flex-direction: row;
  top: 16rem;
}`;

export const CustomIcon = styled.a`
{
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 300;
  font-padding: 0px;
  font-margin: 0px;
}
`;

export const ButtonContainer = styled.div`
{
    position: absolute;
    display:flex;
    flex-direction:column;
    top: 18rem;
}`;

export const CustomButton = styled.div`
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
  &:hover,
  &:focus {
    background-color: ${primaryColor};
    animation: ${shadowPulse} 1s infinite;
  }
}
`;

