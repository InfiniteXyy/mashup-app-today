import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

class Poem extends Component {
  render() {
    let { poem } = this.props;
    let title = poem.result.title;
    if (title.length >= 7) {
      title = title.slice(0, 7) + '...';
    }
    return (
      <React.Fragment>
        <div className="left">
          <Card.Title>诗词</Card.Title>
          <div>
            <div className="weather-header">
              <Card.Subtitle>{poem.result.authors}</Card.Subtitle>
              <p className="city-info" style={{ fontSize: 26 }}>
                {title}
              </p>
            </div>
          </div>
        </div>
        <div className="right" style={{ justifyContent: 'flex-start' }}>
          {poem.result.content.split('|').map((i, index) => (
            <p key={index}>{i}</p>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Poem;
