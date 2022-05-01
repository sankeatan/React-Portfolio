import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Nav } from 'react-bootstrap';
import './index.scss'

export default function NavBar (){
  
return (
  // Beginning of Nav Bar
<Nav justify defaultActiveKey="aboutme" className='nav-bar'>
    {/* Headshot */}
    <img
		src="https://i.imgur.com/TVlTC1a.png"
		alt="Headshot of Cameron Clark"
		className="mb-4"
	  />
  <h1>Cameron Clark</h1>

  {/* Linkedin and Github icons/links */}

  <div>  
  <a
			className="custom-icon"
      href="https://www.github.com/sankeatan"
			target="_blank"
			rel="noreferrer"
			title="Cameron's Github"
		>
			<FontAwesomeIcon
				icon={['fab', 'github']}
				size="2x"
				className='p-2 mx-2 text-dark custom-icon' 
			/>
		</a>
		<a
      className='custom-icon'
			href="https://www.linkedin.com/in/cameronclark1110/"
			target="_blank"
			rel="noreferrer"
			title="Cameron's LinkedIn"
		>
			<FontAwesomeIcon
				icon={['fab', 'linkedin-in']}
				size="2x"
				className="p-2 mx-2 text-dark custom-icon"
			/>
		</a>
    {/* Mail link */}
    <a
					className="custom-icon"
          href="mailto:cameron.clark1110@gmail.com"
					target="_blank"
					rel="noreferrer"
					title="cameron.clark1110@gmail.com"
				>
					<FontAwesomeIcon
						icon={'envelope'}
						size="2x"
						className="p-2 mx-2 text-dark custom-icon"
					/>
				</a>

				{/* Phone link */}
				<a
          className="custom-icon"
					href="tel:407-529-4690"
					target="_blank"
					rel="noreferrer"
					title="(407) 529-4690"
				>
					<FontAwesomeIcon
						icon={'phone'}
						size="2x"
						className="p-2 mx-2 text-dark custom-icon"
					/>
				</a>
  </div>

  {/* Navigation bar */}

  <Nav.Item>
        <a href='/contributions' className='custom-button'>
        Contributions
        </a>
  </Nav.Item>
  <Nav.Item >
      <a 
      href='/aboutme'
      className='custom-button'>
        About Me
      </a>
  </Nav.Item>
  <Nav.Item >
        <a
        className='custom-button'
        href='/technologies' 
        >
        Technologies
        </a>
  </Nav.Item>
  <Nav.Item >
    <a 
    className='custom-button'
    href="https://docs.google.com/document/d/1VpVuNW2n9f498naJ3X8M3ct1b9KsZkpfaU6UR69rUw4/edit" > 
      <FontAwesomeIcon icon={'arrow-up-right-from-square'} /> 
      Resume
    </a>
  </Nav.Item>
</Nav>
)}