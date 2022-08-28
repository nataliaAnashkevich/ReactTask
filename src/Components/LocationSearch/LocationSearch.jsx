import { useEffect, useState } from 'react';
import SearchList from '../SearchList/SearchList';
import { getLocations } from '../../Api/weatherApi';

function LocationSearch({ onItemClick, onError }) {
  const [searchFieldValue, setSearchFieldValue] = useState('');
  const [searchResult, setSearchResult] = useState();

  useEffect(async () => {
    try {
      const results = await getLocations(searchFieldValue);
      setSearchResult(results);
    } catch (error) {
      onError && onError(error);
    }
  }, [searchFieldValue, onError]);

  const handleChange = e => {
    e.preventDefault();
    setSearchFieldValue(e.target.value);
  };

  const itemClickedHandler = (e, item) => {
    onItemClick && onItemClick(item);
    setSearchResult(null);
    setSearchFieldValue('');
  };

  return (
    <div>
      <div>
        <h2>Search your location</h2>
      </div>
      <input type="search" placeholder="Search" value={searchFieldValue} onChange={handleChange} />
      {searchResult && <SearchList items={searchResult} onItemClick={itemClickedHandler} />}
    </div>
  );
}

export default LocationSearch;