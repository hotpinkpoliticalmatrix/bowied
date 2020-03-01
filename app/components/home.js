import React from "react";
import bowies from "../../public/Assets/Images/main.gif";
import AllBowies from './AllBowies'

export const Home = () => {
  return (
    <div>
      <div id="header">
        <div className="webHead">
          so I turn myself to<div className="headAccent">FACE ME</div>
        </div>
        <img
          className="bowiegif" src={bowies}
          // src="https://i.pinimg.com/originals/30/86/49/30864951f0e2ddcb0b9bf71e645b0cec.gif"
          alt="changes"
        />
      </div>
      <div>
        <AllBowies/>
      </div>
    </div>
  );
};
