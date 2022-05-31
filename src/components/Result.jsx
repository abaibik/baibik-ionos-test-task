import { useEffect } from "react";
import { Spinner, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchCityInfections } from "../store/actions";
import {
  selectCities,
  selectCurrentCity,
  selectCityInfections,
} from "../store/selectors";

export const Result = () => {
  const dispatch = useDispatch();

  const currentCityName = useSelector(selectCurrentCity);
  const cities = useSelector(selectCities);
  // const { infections, isFetching, error } = useSelector(selectCityInfections);

  useEffect(() => {
    dispatch(fetchCityInfections);
  }, [dispatch]);

  //   if (isFetching) {
  //     return (
  //       <Spinner className="m-5" animation="border" role="status">
  //         <span className="visually-hidden">
  //           The page is loading. Please, wait
  //         </span>
  //       </Spinner>
  //     );
  //   }

  //   if (error) {
  //     return <h1>{error}</h1>;
  //   }

  return (
    <div>
      <h2>Statistics for {currentCityName}</h2>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Date</th>
            <th>Total cases</th>
            <th>Active cases</th>
          </tr>
        </thead>
        <tbody></tbody>
      </Table>
    </div>
  );
};
