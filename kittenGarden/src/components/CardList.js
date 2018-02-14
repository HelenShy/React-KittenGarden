import React, {Component} from 'react';
import Card from './Card';

class CardList extends Component{
  render(){
    const cats=this.props.cats;
    return(
      <div>
      {
        cats.map((user, i) => {
          return  (
            <Card
              key={i}
              id={cats[i].id}
              name={cats[i].name}
              mail={cats[i].email}
            />);
        })
      }
      </div>
    );
  }
}

export default CardList;
