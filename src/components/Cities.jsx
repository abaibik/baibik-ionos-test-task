import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { fetchCitiesRequest } from "../store/actions";
import { selectCities } from "../store/selectors";

export const Cities = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCitiesRequest);
  }, [dispatch]);

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
    <div>
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
        />
      </Fragment>
    </div>
  );
};
