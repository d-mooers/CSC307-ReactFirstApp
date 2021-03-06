import React, { useState } from "react";
import Table from "./Table";
import Form from "./Form";

function MyApp() {
  const [characters, setCharacters] = useState([]);

  const removeOneCharacter = (index) =>
    setCharacters(characters.filter((_, i) => i !== index));

  const updateList = (person) => setCharacters([...characters, person]);

  return (
    <div className="container">
      <Table data={characters} removeCharacter={removeOneCharacter} />
      <Form handleSubmit={updateList} />
    </div>
  );
}

export default MyApp;
