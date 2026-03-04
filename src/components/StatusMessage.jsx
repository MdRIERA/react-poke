import PropTypes from "prop-types";

export default function StatusMessage({ term, loading, error }) {
  if (!term.trim()) return <p className="hint">Empieza escribiendo un Pokémon…</p>;
  if (loading) return <p className="loading">Cargando...</p>;
  if (error) return <p className="error">{error}</p>;
  return null;
}

StatusMessage.propTypes = {
  term: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
};