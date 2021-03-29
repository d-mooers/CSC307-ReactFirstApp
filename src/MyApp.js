import React, { useState } from "react";
import Table from "./Table";

const DEFAULT_CHARACTERS = [
  {
    name: "Charlie",
    job: "Janitor",
  },
  {
    name: "Mac",
    job: "Bouncer",
  },
  {
    name: "Dee",
    job: "Aspring actress",
  },
  {
    name: "Dennis",
    job: "Bartender",
  },
];

function MyApp() {
  const [characters, setCharacters] = useState(DEFAULT_CHARACTERS);

  const removeOneCharacter = (index) =>
    setCharacters(characters.filter((_, i) => i != index));

  return (
    <div className="container">
      <Table data={characters} removeCharacter={removeOneCharacter} />
    </div>
  );
}

export default MyApp;
