import { useState, useEffect, useCallback } from 'react';

const BASE_URL = 'https://rickandmortyapi.com/api/character';

export function useCharacters(page = 1) {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(`${BASE_URL}?page=${page}`)
      .then((res) => {
        if (!res.ok) throw new Error('Error al cargar los personajes');
        return res.json();
      })
      .then((data) => {
        setCharacters(data.results);
        setInfo(data.info);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [page]);

  return { characters, info, loading, error };
}

export function useCharactersBySpecies(species) {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!species) return;
    setLoading(true);
    setError(null);

    const fetchAll = async () => {
      try {
        let allCharacters = [];
        let nextUrl = `${BASE_URL}?species=${encodeURIComponent(species)}`;

        while (nextUrl) {
          const res = await fetch(nextUrl);
          if (!res.ok) {
            if (res.status === 404) {
              setCharacters([]);
              setLoading(false);
              return;
            }
            throw new Error('Error al filtrar personajes');
          }
          const data = await res.json();
          allCharacters = [...allCharacters, ...data.results];
          nextUrl = data.info.next;
        }

        setCharacters(allCharacters);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchAll();
  }, [species]);

  return { characters, loading, error };
}

export function useCharacterById(id) {
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    setError(null);

    fetch(`${BASE_URL}/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error('Personaje no encontrado');
        return res.json();
      })
      .then((data) => {
        setCharacter(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  return { character, loading, error };
}

export function useSearchCharacters(name) {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const search = useCallback(async (searchName) => {
    if (!searchName.trim()) {
      setCharacters([]);
      return;
    }
    setLoading(true);
    setError(null);

    try {
      let allCharacters = [];
      let nextUrl = `${BASE_URL}?name=${encodeURIComponent(searchName)}`;

      while (nextUrl) {
        const res = await fetch(nextUrl);
        if (!res.ok) {
          if (res.status === 404) {
            setCharacters([]);
            setLoading(false);
            return;
          }
          throw new Error('Error en la búsqueda');
        }
        const data = await res.json();
        allCharacters = [...allCharacters, ...data.results];
        nextUrl = data.info.next;
      }

      setCharacters(allCharacters);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      search(name);
    }, 400);
    return () => clearTimeout(timer);
  }, [name, search]);

  return { characters, loading, error };
}
