import React from 'react';

import './Header.css';
import images from "../../constants/images";
import { SubHeading } from '../../components';
const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
 <div className='app__wrapper_info'> 
   <SubHeading title="Chase new flavour"/>
   <h1 className='app__header-h1'>
    The key to fine dinning
  </h1>
  <p className='p__opensans' style={{margin:'1rem 0'}}>hello somi it is called and a very fine trhbv tyygv gfgiugf gghf ggggfdy</p>
 <button type="button" className='custom__button'>Explore Menu</button>
 </div>
<div className='app__wrapper_img'>
<img src={images.welcome} alt="header img"/>
</div>
  </div>
);

export default Header;
