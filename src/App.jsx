import { useState } from "react";
import "./App.css";

import SearchForm from "./components/SearchForm";
import StatusMessage from "./components/StatusMessage";
import PokemonCard from "./components/PokemonCard";
import { usePokemonSearch } from "./hooks/usePokemonSearch";

function App() {
  const [term, setTerm] = useState("");

  const { pokemon, loading, error } = usePokemonSearch(term);

  const onChange = (e) => setTerm(e.target.value);
  const onSubmit = (e) => e.preventDefault();

  return (
    <div className="app">
      <h1>Buscador de Pokémon</h1>

      <SearchForm term={term} onChange={onChange} onSubmit={onSubmit} />

      <StatusMessage term={term} loading={loading} error={error} />

      {!loading && !error && <PokemonCard pokemon={pokemon} />}
    </div>
  );
}

export default App;