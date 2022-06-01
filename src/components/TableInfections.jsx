import { Table } from "react-bootstrap";

export const TableInfections = ({ infections }) => {
  return (
    <Table striped bordered hover size="sm" className="mb-5">
      <thead>
        <tr>
          <th>Date</th>
          <th>Total cases</th>
          <th>Active cases</th>
        </tr>
      </thead>
      <tbody>
        {infections.map((el) => (
          <tr key={el.date}>
            <td>{el.date}</td>
            <td>{el.totalCases}</td>
            <td>{el.activeCases}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
