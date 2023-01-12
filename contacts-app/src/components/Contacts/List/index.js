import { useState } from "react";

function List({ contacts }) {
  const [filterText, setFilterText] = useState("");

  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) => 
      item[key].toString().toLowerCase().includes(filterText.toLowerCase())
    );
  });

  return (
    <div>
      <h3 className="app-title">Contact List App</h3>

      <div>
        <input
          name="filter"
          placeholder="Filter Contact"
          onChange={(e) => setFilterText(e.target.value)}
        />
      </div>

      <ul className="list">
        {filtered.map((contact, i) => (
          <li key={i}>
            <span>{contact.fullname}</span>
            <span>{contact.phonenumber}</span>
          </li>
        ))}
      </ul>
      <p className="listCount">
        Total contacts
        ({filtered.length})
      </p>
    </div>
  );
}

export default List;
