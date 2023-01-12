import { useState, useEffect } from "react";
import List from "./List";
import Form from "./Form";
import "./styles.css";

function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname:'Enes',
      phonenumber:'05996258574'
    },
    {
      fullname:'Kamil',
      phonenumber:'05886254575'
    },
  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);

  return (
    <div id="Container">
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  );
}

export default Contacts;
