import React from "react";

const Row = ({ name, job, removeCharacter }) => (
  <tr>
    <td>{name}</td>
    <td>{job}</td>
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
