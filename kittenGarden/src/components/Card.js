import React, {Component} from 'react';

class Card extends Component{
  render() {
    return (
      <div className='tc bg-light-green dib br3 pa3 ma3 grow shadow-6 bw-2'>
        <img alt='cat' src={`https://robohash.org/set_set4/${this.props.id}?size=150x150`}/>
        <div>
          <h2>{this.props.name}</h2>
          <p>{this.props.mail}</p>
        </div>
      </div>
    );
  }
}

export default Card;
