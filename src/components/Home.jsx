import { Fragment, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { fetchCitiesRequest } from "../store/actions";
import { selectCities } from "../store/selectors";
import "./Home.css";

export const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCitiesRequest);
  }, []);

  const { cities, isFetching, error } = useSelector(selectCities);

  if (error) {
    return <h1>error:{error}</h1>;
  }

  if (isFetching) {
    return <h1>loading</h1>;
  }

  const cityOptions = cities.map((city) => ({
    value: city.cityId,
    label: city.cityName,
  }));

  const animatedComponents = makeAnimated();

  return (
    <div className="container">
      <h1>Welcome to Covid numbers of Karlsruhe!</h1>

      <Fragment>
        <Select
          className="basic-single"
          classNamePrefix="select"
          name="City"
          defaultValue={cityOptions[0]}
          options={cityOptions}
          components={animatedComponents}
          closeMenuOnSelect={true}
          isClearable={true}
          isSearchable={true}
        />
      </Fragment>
    </div>
  );
};
