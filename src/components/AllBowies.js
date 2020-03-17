import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchBowies } from "../redux/bowies";

class AllBowies extends Component {
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
              <a href={'/bowies/' + bowie.id}><img className="bowieThumbs" src={bowie.imageUrl} /></a>
              <a href={'/bowies/' + bowie.id}><p className='subHeader'>{bowie.name}</p></a>
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

export default connect(mapStateToProps, mapDispatchToProps)(AllBowies);
