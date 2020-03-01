import React, { Component } from "react";

export class SongList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSong: {
        id: "",
        name: "",
        audioUrl: "",
        length: "",
        genre: "",
        description: "",
        source: "",
        releaseDate: "",
        songwriter: "",
        single: false
      }
    };
  }
  render() {
    const songs = this.props.songs;
    console.log(songs);
    return songs ? (
      <div className="songsMapped">
        {songs.map(song => {
          return (
          <div key={song.name}>
            <p className='songTitle'>{song.name}</p>
          </div>
          );
        })}
      </div>
    ) : (
      <div>
        <p className="loading">fetching songs</p>
      </div>
    );
  }
}
