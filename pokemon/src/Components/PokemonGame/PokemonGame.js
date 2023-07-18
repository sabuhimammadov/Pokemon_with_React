import React from "react";
import { PokemonTeam } from "../PokemonTeam";
import pokemonData from "../../MockJson/Pokemon.json";
export class PokemonGame extends React.Component {
  pokemons = pokemonData;
  constructor() {
    super();
    this.state = {
      team1: [],
      team2: [],
      isShow:false
    };
    this.onPlay = this.onPlay.bind(this);
  }
  onPlay() {
    let hand1 = [];
    let hand2 = [...this.pokemons];
    while (hand1.length < hand2.length) {
      let randIdx = Math.floor(Math.random() * hand2.length);
      let randPokemon = hand2.splice(randIdx, 1)[0];
      hand1.push(randPokemon);
    }
    this.setState({ team1: hand1, team2: hand2,isShow:true });
  }
  render() {
    const team1Point = this.state.team1.reduce(((sum,pokemons)=>sum +pokemons.base_experience),0)
    const team2Point = this.state.team2.reduce(((sum,pokemons)=>sum +pokemons.base_experience),0)

    return (
      <>
        <div className="text-center">
          <h1 className="text-center mt-2" style={{ color: "brown" }}>
            Welcome Pokemon Game
          </h1>
          <button type="button" class="btn btn-outline-success" onClick={this.onPlay}>
            Play Game
          </button>{" "}
        </div>
       {this.state.isShow  && (<div className="text-center ms-3 mb-5">
          <PokemonTeam
            teamName={"Team 1"}
            isWinner={team1Point>team2Point}
            teamData={this.state.team1}
            teamPoint = {team1Point}
          />
          <br />
          <PokemonTeam
            teamName={"Team 2"}
            isWinner={team2Point>team1Point}
            teamData={this.state.team2}
            teamPoint = {team2Point}

          />
        </div>)}
      </>
    );
  }
}
