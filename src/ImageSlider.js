import React from 'react';
// import Bomb from './Bomb';

class ImageSlider extends React.Component {
  state = {
    currentSlideIndex: 0
  }

  render() {
    return (
      <h3>I am on slide {this.state.currentSlideIndex}</h3>
    )
  }
}

export default ImageSlider;
