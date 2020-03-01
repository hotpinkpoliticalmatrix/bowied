import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchBowie } from "../redux/bowies";

export class Bowie extends Component {
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
        <div className="singleContainer">
          <div className="titleCol">
            <p className="title">{bowie.name}</p>
            <img src={bowie.imageUrl} />
          </div>
          <div className="descripCol">
            <p className="description">{bowie.description}</p>
            <p className="source">{bowie.source}</p>
          </div>
        </div>
      </div>
    ) : (
      <div>
        <p>fetching bowies...</p>
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
