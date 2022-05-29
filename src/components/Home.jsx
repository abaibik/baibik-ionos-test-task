import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Cities } from "./Cities";
import "./Home.css";

import { TimePeriod } from "./TimePeriod";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <h1>Welcome to Covid numbers of Karlsruhe!</h1>
      <main>
        <Cities />
        <TimePeriod />
      </main>
      <Button variant="success" onClick={() => navigate("/result")}>
        Get result
      </Button>
    </div>
  );
};
