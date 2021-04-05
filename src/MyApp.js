import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "./Table";
import Form from "./Form";
import { dev_url } from "./Constants.js";

const makePostCall = (character) =>
  axios
    .post(`${dev_url}/users`, character)
    .then((res) => {
      console.log(res);
      return res.status === 200;
    })
    .catch((e) => {
      console.log(e);
      return false;
    });
function MyApp() {
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${dev_url}/users`)
      .then((res) => {
        const characters = res.data.users_list;
        setCharacters(characters);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setError(true);
      });
  }, []);

  const removeOneCharacter = (index) =>
    setCharacters(characters.filter((_, i) => i != index));

  const updateList = async (person) => {
    (await makePostCall(person)) && setCharacters([...characters, person]);
  };

  return (
    <div className="container">
      <Table data={characters} removeCharacter={removeOneCharacter} />
      <Form handleSubmit={updateList} />
    </div>
  );
}

export default MyApp;
