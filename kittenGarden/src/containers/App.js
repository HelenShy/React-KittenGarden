import React, {Component} from 'react';
import CardList from '../components/CardList';
//import {cats} from './cats';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';

class App extends Component{
  constructor() {
    super()
    this.state = {
      cats: [],
      searchField:'',
    }
}

    componentDidMount(){
      fetch('http://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(users=>{this.setState({cats: users})});
    }

    OnSearchChange = (event) => {
      //console.log(event.target.value);
      this.setState({searchField: event.target.value});
    }

    render(){
      const filtered = this.state.cats.filter((cat) =>{
        return cat.name.toLowerCase().includes(this.state.searchField.toLowerCase())
      })
      if (this.state.cats===0){
        return <h1>Loading</h1>
      }
      else {
          return (
            <div className='tc'>
              <h1>Kitten Garden</h1>
              <SearchBox searchChange={this.OnSearchChange}/>
              <Scroll>
                <CardList cats={filtered}/>
              </Scroll>
            </div>
          );
       }
     }
}

export default App;
