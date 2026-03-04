import PropTypes from "prop-types";

export default function SearchForm({ term, onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit} className="searchForm">
      <input
        value={term}
        onChange={onChange}
        placeholder="Escribe un Pokémon (pikachu, bulbasaur, 1...)"
      />
    </form>
  );
}

SearchForm.propTypes = {
  term: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};