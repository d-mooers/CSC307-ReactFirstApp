import React from "react";

const Row = ({ name, job, id, removeCharacter }) => (
  <tr>
    <td>{name}</td>
    <td>{job}</td>
    <td>{id}</td>
    <td>
      <button onClick={removeCharacter}>Delete</button>
    </td>
  </tr>
);

const TableBody = ({ data, removeCharacter }) => (
  <tbody>
    {data.map((itm, i) => (
      <Row
        name={itm.name}
        job={itm.job}
        id={itm.id}
        key={i}
        removeCharacter={() => removeCharacter(i)}
      />
    ))}
  </tbody>
);

const TableHeader = () => (
  <thead>
    <tr>
      <th>Name</th>
      <th>Job</th>
      <th>Id</th>
      <th>Remove</th>
    </tr>
  </thead>
);

const Table = (props) => (
  <table>
    <TableHeader />
    <TableBody {...props} />
  </table>
);

export default Table;
