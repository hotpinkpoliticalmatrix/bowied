import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchBowie } from "../redux/bowies";
import { Albums } from "./AlbumsByBowie";

class Bowie extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchBowie(this.props.match.params.id);
  }

  render() {
    const [bowie] = this.props.bowie;
    return bowie ? (
      <div key={bowie.id}>
        <div className="mainContainer">
          <div className="topContainer">
            <div className="titleCol">
              <p className="title">{bowie.name}</p>
              <img className="imageLarge" src={bowie.imageUrl} />
            </div>
            <div className="descripCol">
              <p className="description">
                {bowie.description} <a href={bowie.source}>[[ Read more ]]</a>
              </p>
            </div>
          </div>
          <div className="albumContainer">
            <Albums albums={bowie.albums} />
          </div>
        </div>
      </div>
    ) : (
      <div>
        <p className="loading">fetching bowies...</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  bowie: state.bowies
});

const mapDispatchToProps = {
  fetchBowie
};

export const SingleBowie = connect(mapStateToProps, mapDispatchToProps)(Bowie);
