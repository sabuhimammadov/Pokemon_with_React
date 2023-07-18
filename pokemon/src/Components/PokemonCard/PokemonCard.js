import React from "react";
const convertIdImage = (id) => {
  const newId = id < 10 ? "00" + id : id < 100 ? "0" + id : id;
  return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${newId}.png`;
};
export class PokemonCard extends React.Component {
  render() {
    const { id, name, type, base_experience } = this.props;
    return (
      <div class="card me-3" style={{ width: "15rem" }}>
        <img src={convertIdImage(id)} class="card-img-top" alt={name} />
        <div class="card-body text-center">
          <h5 class="card-title">{name}</h5>
          <p class="card-text">
           Type: {type}
          </p>
        <p> EXP: {base_experience}</p>
        </div>
      </div>
    );
  }
}
