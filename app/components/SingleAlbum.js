import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAlbum } from '../redux/albums'

export class Album extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.fetchAlbum(this.props.match.params.id)
  }

  render() {
    const [album] = this.props.album;
    return album && (
      <div></div>
    )
  }
}
