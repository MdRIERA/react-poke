import { useEffect, useState } from "react";

export function usePokemonSearch(term) {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const query = term.trim().toLowerCase();

    if (!query) {
      setPokemon(null);
      setError("");
      setLoading(false);
      return;
    }

    const timeoutId = setTimeout(() => {
      const fetchPokemon = async () => {
        try {
          setLoading(true);
          setError("");
          setPokemon(null);

          const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}`);

          if (!res.ok) {
            setError("pokemon no encontrado");
            setLoading(false);
            return;
          }

          const data = await res.json();

          setPokemon({
            name: data.name,
            image:
              data.sprites?.other?.["official-artwork"]?.front_default ||
              data.sprites?.front_default,
            height: data.height,
            weight: data.weight,
            types: data.types.map((t) => t.type.name),
          });

          setLoading(false);
        } catch {
          setError("Error al conectar con la API");
          setLoading(false);
        }
      };

      fetchPokemon();
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [term]);

  return { pokemon, loading, error };
}