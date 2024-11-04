import { useState, useEffect } from 'react';

export const useFetchSearchHistory = () => {
  const [recentSearches, setRecentSearches] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchSearchHistory = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://myescape.online/api/searches/recent',{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });
      const data = await response.json();
      setRecentSearches(data);
    } catch (error) {
      console.error('Error fetching search history:', error);
    } finally {
      setLoading(false);
    }
  };


  const handleDeleteSearch = async (searchId) => {
    try {
      const response = await fetch(`https://myescape.online/api/search/destroy/${searchId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        const updatedSearches = recentSearches.filter(search => search.id !== searchId);
        setRecentSearches(updatedSearches);
      } else {
        console.error('Error eliminando búsqueda');
      }
    } catch (error) {
      console.error('Error eliminando búsqueda:', error);
    }
  };

  useEffect(() => {
    fetchSearchHistory();
  }, []);

  return { recentSearches, loading, handleDeleteSearch, fetchSearchHistory };
};
