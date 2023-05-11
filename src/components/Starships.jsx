import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Form from "./Form";

const Starships = (props) => {
  const { shipID } = useParams();

  const [ship, setShip] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/starships/${shipID}`)
      .then((res) => {
        console.log(res.data);
        setShip(res.data);
      })
      .catch((error) => {
        console.log("❌", error);
        navigate("/notfound/droids");
      });
  }, [shipID]);

  return (
    <fieldset>
      <Form filter={props.filter} />
      {/* {JSON.stringify(ship)} */}
      <div>
        {ship ? (
          <>
            <h2>{ship.name}</h2>
            <p>
              <span className="fw-bold">Starship Class:</span>{" "}
              {ship.starship_class}
            </p>
            <p>
              <span className="fw-bold">Length:</span> {ship.length} m
            </p>
            <p>
              <span className="fw-bold">Cost:</span> {ship.cost_in_credits}{" "}
              Galactic credits
            </p>
            <p>
              <span className="fw-bold">Min. Crew Size:</span> {ship.crew}{" "}
              members
            </p>
          </>
        ) : (
          <p>Looking for droids...</p>
        )}
      </div>
    </fieldset>
  );
};

export default Starships;
