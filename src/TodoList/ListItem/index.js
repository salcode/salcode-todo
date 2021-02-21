function ListItem({name}) {
  return (
    <li>
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
