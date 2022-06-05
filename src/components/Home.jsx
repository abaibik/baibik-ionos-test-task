import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Cities } from "./Cities";
import "./Home.css";

import { TimePeriod } from "./TimePeriod";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <main className="mt-5 grid-even-columns grid-auto-flow">
      <header>
        <h1>Welcome to Covid numbers of Karlsruhe!</h1>
      </header>

      <Cities />
      <TimePeriod />

      <Button
        className="button-get-result"
        variant="primary"
        size="lg"
        onClick={() => navigate("/result")}
      >
        Get result
      </Button>
    </main>
  );
};
