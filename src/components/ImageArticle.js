import React, { Component } from 'react';
import pic from '../assets/15.jpg';
import pic2 from '../assets/16.jpg';
import pic3 from '../assets/17.JPG';
import pic4 from '../assets/18.JPG';
import pic5 from '../assets/1.jpg';
import pic6 from '../assets/2.jpg';
import pic7 from '../assets/3.jpg';
import pic8 from '../assets/4.jpg';
import pic9 from '../assets/5.JPG';
import pic10 from '../assets/6.JPG';
import pic11 from '../assets/7.JPG';
import pic12 from '../assets/8.JPG';
import pic13 from '../assets/9.JPG';
import pic14 from '../assets/10.jpg';
import pic15 from '../assets/11.JPG';
import pic16 from '../assets/12.jpg';
import pic17 from '../assets/13.jpg';
import pic18 from '../assets/14.jpg';
import left from '../assets/arrow_left.png';
import right from '../assets/arrow_right.png';

import { getRandomInt } from '../utils/utils';

class ImageArticle extends Component {
  constructor() {
    super();
    this.state = {
      sliding: false,
      pics: [
        pic17,
        pic10,
        pic16,
        pic12,
        pic14,
        pic13,
        pic4,
        pic18,
        pic,
        pic9,
        pic2,
        pic15,
        pic3,
        pic11,
        pic5,
        pic8,
        pic6,
        pic7,
      ],
      picIndex: getRandomInt(0, 18),
    };
  }

  handleClick(index) {
    if (index !== this.state.picIndex) {
      this.setState({
        picIndex: index,
        sliding: true,
      });
    }
    setTimeout(() => {
      this.setState({
        sliding: false,
      });
    }, 500);
  }

  render() {
    const index = this.state.picIndex;
    let next = index + 1;
    let prev = index - 1;
    if (index === 0) {
      prev = this.state.pics.length - 1;
    } else if (index === this.state.pics.length - 1) {
      next = 0;
    }

    return (
      <div className="container">
        <div className="article-header">
          <h2>Ein paar Erinnerungen aus 2024 ❤️</h2>
        </div>
        <div className="article ImageArticle">
          <img
            className="arrows"
            alt="Previous"
            src={left}
            onClick={() => this.handleClick(prev)}
          />
          <img
            alt="You should see something here"
            src={this.state.pics[index]}
            className={this.state.sliding ? 'center show' : 'center'}
            onClick={() => this.handleClick(index)}
          />
          <img className="arrows" alt="Next" src={right} onClick={() => this.handleClick(next)} />
        </div>
      </div>
    );
  }
}

export default ImageArticle;
