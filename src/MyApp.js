import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "./Table";
import Form from "./Form";
import { dev_url } from "./Constants.js";

const makePostCall = (character) =>
  axios
    .post(`${dev_url}/users`, character)
    .then((res) => {
      return {
        success: res.status === 201,
        char: res.data,
      };
    })
    .catch((e) => {
      console.log(e);
      return e;
    });

const makeDeleteCall = (id) =>
  axios
    .delete(`${dev_url}/users/${id}`)
    .then((res) => {
      return res.status === 204;
    })
    .catch((e) => {
      console.log(e);
      return false;
    });

function MyApp() {
  const [characters, setCharacters] = useState([]);
  //const [error, setError] = useState(false);
  //const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${dev_url}/users`)
      .then((res) => {
        const characters = res.data.users_list;
        setCharacters(characters);
        //setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        //setError(true);
      });
  }, []);

  const removeOneCharacter = async (index) => {
    const charId = characters[index].id;
    const deleted = await makeDeleteCall(charId);
    if (deleted) setCharacters(characters.filter((_, i) => i !== index));
    //else setError(true);
  };

  const updateList = async (person) => {
    const addedChar = await makePostCall(person);
    if (addedChar.success) setCharacters([...characters, addedChar.char]);
    else console.log("Something went wrong trying to add character...");
  };

  return (
    <div className="container">
      <Table data={characters} removeCharacter={removeOneCharacter} />
      <Form handleSubmit={updateList} />
    </div>
  );
}

export default MyApp;
