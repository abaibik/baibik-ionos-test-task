import { Button } from "react-bootstrap";
import { Cities } from "./Cities";
import "./Home.css";

import { TimePeriod } from "./TimePeriod";

export const Home = () => {
  return (
    <div className="container">
      <h1>Welcome to Covid numbers of Karlsruhe!</h1>
      <main>
        <Cities />
        <TimePeriod />
      </main>
      <Button variant="success">Get result</Button>
    </div>
  );
};
