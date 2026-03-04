import PropTypes from "prop-types";

export default function PokemonCard({ pokemon }) {
  if (!pokemon) return null;

  return (
    <div className="card">
      <h2 className="name">{pokemon.name}</h2>

      {pokemon.image ? (
        <img className="img" src={pokemon.image} alt={pokemon.name} />
      ) : (
        <p>Sin imagen</p>
      )}

      <div className="info">
        <p><b>Altura:</b> {pokemon.height}</p>
        <p><b>Peso:</b> {pokemon.weight}</p>
        <p><b>Tipos:</b> {pokemon.types.join(", ")}</p>
      </div>
    </div>
  );
}

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string,
    height: PropTypes.number,
    weight: PropTypes.number,
    types: PropTypes.arrayOf(PropTypes.string),
  }),
};