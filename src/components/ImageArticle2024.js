import React, { Component } from 'react';
import pic from '../assets/fratz.jpeg';
import pic2 from '../assets/schwab.jpeg';
import pic3 from '../assets/wandern.jpeg';
import pic4 from '../assets/theater.jpeg';
import pic5 from '../assets/samu.jpeg';
import pic6 from '../assets/stuggi.jpeg';
import pic7 from '../assets/fest.jpeg';
import pic8 from '../assets/chuba.jpeg';
import pic9 from '../assets/nina.jpeg';
import pic10 from '../assets/klettern.jpeg';
import pic11 from '../assets/schwimmen.jpeg';
import pic12 from '../assets/dachzelt.jpeg';
import pic13 from '../assets/schweden.jpeg';
import pic14 from '../assets/pipi.jpeg';
import pic15 from '../assets/huhn.jpeg';
import pic16 from '../assets/van_tag.jpeg';
import pic17 from '../assets/see.jpeg';
import pic18 from '../assets/perfekt.jpeg';
import pic19 from '../assets/van_nacht.jpeg';
import pic20 from '../assets/thai.jpeg';
import pic21 from '../assets/gurke.jpeg';
import pic22 from '../assets/savasana.jpeg';
import pic23 from '../assets/hochzeit.jpeg';
import pic24 from '../assets/krone.jpeg';
import pic25 from '../assets/twingo.jpeg';
import left from '../assets/arrow-left-white.png';
import right from '../assets/arrow-right-white.png';

class ImageArticle2024 extends Component {
  constructor() {
    super();
    this.state = {
      sliding: false,
      pics: [
        pic,
        pic2,
        pic3,
        pic4,
        pic5,
        pic6,
        pic7,
        pic8,
        pic9,
        pic10,
        pic11,
        pic12,
        pic13,
        pic14,
        pic15,
        pic16,
        pic17,
        pic18,
        pic19,
        pic20,
        pic21,
        pic22,
        pic23,
        pic24,
        pic25,
      ],
      picIndex: 0,
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

export default ImageArticle2024;
