import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	Name,
	ButtonContainer,
	CustomButton,
	CustomIconContainer,
	CustomIcon,
	NavContainer,
	Portrait,
	HeadShotContainer
} from './NavBar.styles';
import './index.scss'

export default function NavBar ({ handleViewChange }){
  
return (
<NavContainer>
	<HeadShotContainer>
	<Portrait
		src="https://i.imgur.com/TVlTC1a.png"
		alt="Headshot of Cameron Clark"
	  />
	<Name>Cameron Clark</Name>
	<CustomIconContainer>
		<CustomIcon
			href="https://www.github.com/sankeatan"
			target="_blank"
			rel="noreferrer"
			title="Cameron's Github">
				<FontAwesomeIcon
					icon={['fab', 'github']}
					size="2x"
					className='text-dark grow'/>
			</CustomIcon>
 		<CustomIcon
			href="https://www.linkedin.com/in/cameronclark1110/"
			target="_blank"
			rel="noreferrer"
			title="Cameron's LinkedIn">
			<FontAwesomeIcon
				icon={['fab', 'linkedin-in']}
				size="2x"
				className="text-dark grow"/>
			</CustomIcon>
		<CustomIcon
    		href="mailto:cameron.clark1110@gmail.com"
			target="_blank"
			rel="noreferrer"
			title="cameron.clark1110@gmail.com">
			<FontAwesomeIcon
				icon={'envelope'}
				size="2x"
				className="text-dark grow"/>
			</CustomIcon>
		<CustomIcon
			href="tel:407-529-4690"
			target="_blank"
			rel="noreferrer"
			title="(407) 529-4690">
			<FontAwesomeIcon
				icon={'phone'}
				size="2x"
				className="text-dark grow"/>
			</CustomIcon>
		</CustomIconContainer>
	</HeadShotContainer>
	

	<ButtonContainer>
    <CustomButton
		onClick={() => handleViewChange('Contributions')}>
        Contributions
    </CustomButton>
    <CustomButton
	  onClick={() => handleViewChange('About')}>
        About Me
    </CustomButton>
    <CustomButton
		onClick={() => handleViewChange('Technologies')}>
        Technologies
    </CustomButton>
	<a
		href="https://docs.google.com/document/d/1VpVuNW2n9f498naJ3X8M3ct1b9KsZkpfaU6UR69rUw4/edit?usp=sharing"
		target="_blank"
		rel='noreferrer'>
    <CustomButton>
    	<FontAwesomeIcon icon={'arrow-up-right-from-square'} /> 
      		Resume
    </CustomButton>
	</a>
  	</ButtonContainer>
</NavContainer>
)}