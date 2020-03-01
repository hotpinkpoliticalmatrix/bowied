import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAlbum } from "../redux/albums";
import { SongList } from './SongList'

export class Album extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchAlbum(this.props.match.params.id);
  }

  render() {
    // console.log(this.props.album);
    const album = this.props.album;
    return album ? (
      <div key={album.id}>
        <div className="mainContainer">
          <div className="titleCol">
            <h1 className="title">{album.name}</h1>
            <img src={album.albumArt} />
          </div>
          <div className="descripCol">
            <p className="description">{album.description}</p>
            <a className="source" href={album.source}>
              [[ Read more ]]
            </a>
          </div>
        </div>
        <table className="albumInfo">
          <tbody>
            <tr>
              <th>Release Date:</th>
              <td>{album.releaseDate}</td>
            </tr>
            <tr>
              <th>Genre:</th>
              <td>{album.genre}</td>
            </tr>
            <tr>
              <th>Length:</th>
              <td>{album.length}</td>
            </tr>
            <tr>
              <th>Label:</th>
              <td>{album.label}</td>
            </tr>
            <tr>
              <th>Producer</th>
              <td>{album.producer}</td>
            </tr>
            <tr></tr>
          </tbody>
        </table>
        <SongList songs={this.props.album.songs}/>
      </div>
    ) : (
      <div>
        <p className="loading">fetching album</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  album: state.albums
});

const mapDispatchToProps = {
  fetchAlbum
};

export const SingleAlbum = connect(mapStateToProps, mapDispatchToProps)(Album);
