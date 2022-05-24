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
    position: fixed;
    display:flex;
    flex-direction: row;
    background-color: ${secondaryColor};
    width: 100%;
    height: 30%;
    justify-content: space-evenly;
    @media only screen and (min-width: 768px) {
      align-items: center;
      height: 100vh;
      width: 30%;
      flex-direction: column;
      }
}
`;

export const HeadShotContainer = styled.div`{
  margin: 5px;
  display:flex;
  flex-direction:column;
  justify-content: space-evenly;
  align-items: center;
}`;

export const Portrait = styled.img`
{
  position: relative;
  display: flex;
  height: 125px;
	width: 125px;
	border-radius: 100%;
	box-shadow: 5px 5px 15px #000001e5;
  @media only screen and (min-width: 768px) {
    height: 200px;
    width: 200px;
    top: 5px;
    left: 0px;
    }
}
`;

export const Name = styled.h1`
{
  position: relative;
  font-family: 'Staatliches', cursive;
  margin: 5px;
  text-align: center;
}
`;

export const CustomIconContainer = styled.div`
{
  position: relative;
  display: flex;
  flex-direction: row;
  @media only screen and (min-width: 768px)
  {
    display: flex;
    position: relative;
    flex-direction: row;
    }
}`;

export const CustomIcon = styled.a`
{
  font-family: 'Space Grotesk', sans-serif;
  margin-left: 5px;
  margin-right: 5px;
  margin-bottom: 2px;
  display: flex;
  position: relative;
}
`;

export const ButtonContainer = styled.div`
{
    margin: 5px;
    position: relative;
    display:flex;
    flex-direction: column;
    justify-content: space-evenly;
    @media only screen and (min-width: 768px) {

    }
}`;

export const CustomButton = styled.div`
{
  background-color: ${tertiaryColor};
	color: #000000;
	text-decoration: none;
	display: flex;
	font-family: 'Space Grotesk', sans-serif;
	font-size: 1rem;
	font-weight: 300;
	border-radius: 10px;
  height: 30px;
	width: 150px;
  align-items: center;
  justify-content: center;
  
  &:hover, click {
    background-color: ${primaryColor};
    animation: ${shadowPulse} 1s infinite;
  }
  @media only screen and (min-width: 768px) {
    padding: 5px;
    font-size: 2rem;
    height: 75px;
	  width: auto;
    margin: 10px;
  }

}`;

