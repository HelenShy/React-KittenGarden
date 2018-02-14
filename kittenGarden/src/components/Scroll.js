import React, {Component} from 'react';

class Scroll extends Component{
  render(){
    return (
      <div style={{overflow:'scroll', border:'1px solid black', height:465}}>
     {this.props.children}
     </div>
   );
  }
};

export default Scroll;
