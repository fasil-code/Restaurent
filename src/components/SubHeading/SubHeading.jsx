import React from 'react';
import images from '../../constants/images';

const SubHeading = ({title}) => (
  <div style={{margin:'1rem'}}>
  <p className='p__cormorant'>{title}</p>
  <img src={images.spoon} alt="spoon"/>
 
  </div>
);

export default SubHeading;
