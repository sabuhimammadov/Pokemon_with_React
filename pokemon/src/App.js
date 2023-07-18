
import React from "react"
import { Header } from "./Components/Header/HeaderInfo"
import { PokemonGame } from "./Components/PokemonGame"

class App extends React.Component{

  render(){

    return(
      <>
      <Header/>
      <PokemonGame/>
      </>
      
    )
  }
}
export default App