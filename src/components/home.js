import React from "react";
import bowies from "../assets/images/changes.gif";
import AllBowies from './AllBowies'

export const Home = () => {
  return (
    <div>
      <div id="header">
        <div className="webHead">
          so I turn myself to<div className="headAccent">FACE ME</div>
        </div>
        <img
          className="bowiegif"
          src={bowies}
          alt="changes"
        />
      </div>
      <div>
        <AllBowies/>
      </div>
    </div>
  );
};
