import React, { useState } from "react";

const DEFAULT_PERSON = {
  name: "",
  job: "",
};

const Form = (props) => {
  const [person, setPerson] = useState(DEFAULT_PERSON);

  const submitForm = () => {
    props.handleSubmit(person);
    setPerson(DEFAULT_PERSON);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "job") setPerson({ name: person["name"], job: value });
    else setPerson({ name: value, job: person["job"] });
  };

  return (
    <form>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        id="name"
        value={person.name}
        onChange={handleChange}
      />
      <label htmlFor="job">Job</label>
      <input
        type="text"
        name="job"
        id="job"
        value={person.job}
        onChange={handleChange}
      />
      <input type="button" value="Submit" onClick={submitForm} />
    </form>
  );
};

export default Form;
