import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      loading: false,
      cards:[],
      url: 'http://daw-tcg.test/api/cards'
    }
  }

  componentDidMount()
  {
    this.getCard();
  }

  getCard = () => {
    this.setState({loading: true})

    fetch(this.state.url)
    .then(res => res.json())
    .then(res => {

      this.setState({
        cards: res.data,
        loading: false
      })

    });
  };
  render() {
    

    return (
      
        
      

      
        <div>
           
           {this.state.cards.map(card => (

             <li>
               Name: {card.name} | attack: {card.attack} | defense: {card.defense}
             </li>
           )   
            
            
            )}
         

        </div>
      
      
    );
  }
}

export default App;
