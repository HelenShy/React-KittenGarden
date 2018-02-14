import React, {Component} from 'react';

class SearchBox extends Component{
  render(){
    return(
      <input className='pa3 ma3 ba bg-lightest-blue b--blue' type='search' placeholder='Search kitten' onChange={this.props.searchChange}/>
    );
  }
}

export default SearchBox;
