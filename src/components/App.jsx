import React from "react";
import Cards from "./Cards";
import "../styles.css";
import contacts from "../contacts";

// console.log(contacts);
function createCard(contact) {
  return (
    <Cards
      key={contact.id}
      name={contact.name}
      photo={contact.imgURL}
      number={contact.phone}
      email={contact.email}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map(createCard)}
      {/* <Cards
        name={contacts[0].name}
        photo={contacts[0].imgURL}
        number={contacts[0].phone}
        email={contacts[0].email}
      />

      <Cards
        name={contacts[1].name}
        photo={contacts[1].imgURL}
        number={contacts[1].phone}
        email={contacts[1].email}
      />

      <Cards
        name={contacts[2].name}
        photo={contacts[2].imgURL}
        number={contacts[2].phone}
        email={contacts[2].email}
      /> */}
    </div>
  );
}

export default App;
