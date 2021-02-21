function ListItem({name}) {
  return (
    <li className="list-item">
      <button
        className="complete-button"
      >
        Complete
      </button>

      {`${name}`}
    </li>
  );
}

export default ListItem;
