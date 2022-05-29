import { useEffect } from "react";
import { Table } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { fetchCityInfections } from "../store/actions";

export const Result = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCityInfections);
  }, [dispatch]);

  return (
    <div>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>First Name</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mark</td>
          </tr>
          <tr>
            <td>Jacob</td>
          </tr>
          <tr>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};
