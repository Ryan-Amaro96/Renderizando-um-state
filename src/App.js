import React, { Component } from 'react'

export default class App extends Component {

  state = {
     dados:
    {
      name: "Ryan",
      age: 19,
      favoriteFood: "Empadão",
      musics:["isso que é bom", "quieto", "B.N.R"]
    } 
  }

  render(){
    return(
      <div>
        <h1>{this.state.dados.nome}</h1>
        <h2>{this.state.dados.age}</h2>
        <h3>{this.state.dados.favoriteFood}</h3>
        <ol>
          <li>{this.state.dados.musics[0]}</li>
          <li>{this.state.dados.musics[1]}</li>
          <li>{this.state.dados.musics[2]}</li>
        </ol>
      </div>
    )
  }
}