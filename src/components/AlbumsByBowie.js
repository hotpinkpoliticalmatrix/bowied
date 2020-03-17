import React from "react";

export const Albums = props => {
  console.log(props);
  return (
    <div className="albumsMapped">
      <p className='title'>Albums</p>
      {props.albums.map((album) => {
        return (
        <div key={album.name}>
          <a href={'/albums/' + album.id}>{album.name}</a>
          <a href={'/albums/' + album.id}><img className="bowieThumbs" src={album.albumArt}/></a>
        </div>
        )
      })}
    </div>
  );
};
