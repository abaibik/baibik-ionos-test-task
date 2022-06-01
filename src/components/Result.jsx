import { useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchCityInfections } from "../store/actions";
import { selectCityInfections, selectCurrentCity } from "../store/selectors";
import { Chart } from "./Chart";
import { TableInfections } from "./TableInfections";
import { useResizeDetector } from "react-resize-detector";

export const Result = () => {
  const dispatch = useDispatch();

  const currentCityName = useSelector(selectCurrentCity);

  useEffect(() => {
    dispatch(fetchCityInfections);
  }, [dispatch]);

  const { infections, isFetching, error } = useSelector(selectCityInfections);
  const { width, ref } = useResizeDetector();

  if (isFetching) {
    return (
      <Spinner className="m-5" animation="border" role="status">
        <span className="visually-hidden">
          The page is loading. Please, wait
        </span>
      </Spinner>
    );
  }

  if (error) {
    return <h1 className="m-5">{error}</h1>;
  }

  return (
    <div className="container mt-3" ref={ref}>
      <h2>Statistics for {currentCityName}</h2>
      <TableInfections infections={infections} />
      <Chart infections={infections} width={width} />
    </div>
  );
};
