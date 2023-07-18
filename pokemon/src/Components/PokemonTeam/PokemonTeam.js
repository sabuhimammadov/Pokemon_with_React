import React from "react";
import PropTypes from "prop-types";
import style from "../PokemonTeam/PokemonTeam.module.css";
import { PokemonCard } from "../PokemonCard/PokemonCard";

export class PokemonTeam extends React.Component {
  static defaultProps = {
    teamName: "Team",
  };
  render() {
    const { teamName, isWinner, teamData ,teamPoint} = this.props;
    const dynamicClassName = isWinner ? style.green : style.red;
    return (
      <div>
        <h1>{teamName}</h1>
        <h2 className={dynamicClassName}>{isWinner ? "Win" : "Lose"}</h2>
        <span style={{color:"orange"}}>Total Score: {teamPoint}</span> <br/><br/>
        <div className="d-flex justify-content-center align-items-center">
          {teamData?.map((pokemon) => {
            return <PokemonCard key={"PokemonCard" + pokemon.id} {...pokemon} />;
          })}
        </div>
      </div>
    );
  }
}
PokemonTeam.propTypes = {
  teamName: PropTypes.string,
  isWinner: PropTypes.bool,
  teamData: PropTypes.array,
};
