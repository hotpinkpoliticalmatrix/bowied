import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchBowies } from "../redux/bowies";

class Bowies extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBowies();
  }
  render() {
    return (
      <div className="bowiesMapped">
        {this.props.bowies.map(bowie => {
          return (
            <div key={bowie.id}>
              <img className="bowieThumbs" src={bowie.imageUrl} />
              <h2>{bowie.name}</h2>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    bowies: state.bowies
  };
};

const mapDispatchToProps = {
  fetchBowies
};

export const AllBowies = connect(mapStateToProps, mapDispatchToProps)(Bowies);
