import './index.scss';
// import { useState } from 'react';
import { Card } from 'react-bootstrap';

export default function ContributionCards({ contribution }){
    // const [open, setOpen] = useState(false);
    // const handleClick = function (){
    //     setOpen(!open);

    // }
return(
<Card>
  <Card.Img src={`${contribution.img}`} />
  <Card.ImgOverlay>
  <Card.Body>
    <div className='wrapper'>
     <div className='title-container p-3'>
        <Card.Title>{contribution.title}</Card.Title>
     </div>
     <div className='button-side-expand'>
        <a href={`${contribution.live}` }>
            <button className='button'>Live</button>
        </a>
        <a href={`${contribution.repo}` }>
            <button className='button'>Repo</button>
        </a>
     </div>
    
    </div>
  </Card.Body>
  </Card.ImgOverlay>
</Card>
)
}