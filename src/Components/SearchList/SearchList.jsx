import { useCallback } from 'react';
import styles from './searchList.css';

export default function SearchList({ items, onItemClick }) {
  return items.map(item => <SearchItem key={item.id} item={item} onItemClick={onItemClick} />);
}

function SearchItem({ item, onItemClick }) {
  const itemClickHandler = useCallback(
    e => {
      e.preventDefault();
      onItemClick(e, item);
    },
    [onItemClick, item]
  );

  return (
    <div className={styles.searchResultItem} onClick={itemClickHandler}>
      {item.name}, {item.adminArea}, {item.country}
    </div>
  );
}
