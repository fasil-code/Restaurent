import React from "react";
import "./SpecialMenu.css";
import { images, data } from "../../constants";
import { SubHeading, MenuItem } from "../../components";
const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Menu that fits your Place" />
      <h1 className="headtext__cormorant">Todays Special</h1>
    </div>
    <div className="app__specialMenu-menu">
      <div className="app__specialMenu_menu-wine flex__center">
        <p className="app__specialMenu_menu_heading">Wine & Beer</p>
        <div className="app__specialMenu_menu_items">
          {data.wines.map((wine, index) => (
            <MenuItem key={wine.title+index} price={wine.price} title={wine.title} tags={wine.tags}/>
          ))}
        </div>
      </div>
      <div className="app__specialMenu_menu-img">
        <img src={images.menu} alt="missing"></img>
      </div>
   
      <div className="app__specialMenu_menu-cocktails flex__center">
        <p className="app__specialMenu_menu_heading">Cocktails</p>
        <div className="app__specialMenu_menu_items">
          {data.cocktails.map((cocktail, index) => (
        
     <MenuItem key={cocktail.title+index} price={cocktail.price} title={cocktail.title} tags={cocktail.tags}/>
          ))}
        </div>
      </div>
    </div>
    <div style={{ marginTop: "15px" }}>
      <button className="custom__button">View More</button>
    </div>
  </div>
);

export default SpecialMenu;
