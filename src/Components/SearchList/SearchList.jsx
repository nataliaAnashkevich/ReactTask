import styles from './searchList.css';

export default function SearchList({ items, onItemClick }) {
  return items.map(item => <SearchItem key={item.id} item={item} onItemClick={onItemClick} />);
}

function SearchItem({ item, onItemClick }) {
  const itemClickHandler = e => {
    if (onItemClick) {
      onItemClick(e, item);
    }
  };

  return (
    <div className={styles.searchResultItem} onClick={itemClickHandler}>
      {item.name}, {item.adminArea}, {item.country}
    </div>
  );
}
