import React from "react";

const Row = ({ name, job }) => (
  <tr>
    <td>{name}</td>
    <td>{job}</td>
  </tr>
);

const TableBody = ({ data }) => (
  <tbody>
    {data.map((itm, i) => (
      <Row name={itm.name} job={itm.job} key={i} />
    ))}
  </tbody>
);

const TableHeader = () => (
  <thead>
    <tr>
      <th>Name</th>
      <th>Job</th>
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
