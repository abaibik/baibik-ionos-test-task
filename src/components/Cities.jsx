import { Fragment, useCallback, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { fetchCitiesRequest, setCurrentCity } from "../store/actions";
import { selectCities } from "../store/selectors";

export const Cities = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCitiesRequest);
  }, [dispatch]);

  const { cities, isFetching, error } = useSelector(selectCities);

  useEffect(() => {
    if (cities.length === 0) {
      return;
    }
    dispatch(setCurrentCity(cities[0].cityId, cities[0].cityName));
  }, [dispatch, cities]);

  const handleChange = useCallback(
    (value) => {
      dispatch(setCurrentCity(value.value, value.label));
    },
    [dispatch]
  );

  if (error) {
    return <h1>error:{error}</h1>;
  }

  if (isFetching) {
    return (
      <Spinner className="m-5" animation="border" role="status">
        <span className="visually-hidden">
          The page is loading. Please, wait
        </span>
      </Spinner>
    );
  }

  const cityOptions = cities.map((city) => ({
    value: city.cityId,
    label: city.cityName,
  }));

  const animatedComponents = makeAnimated();

  return (
    <div className="cities">
      <h2>Select a city:</h2>
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
          onChange={handleChange}
        />
      </Fragment>
    </div>
  );
};
