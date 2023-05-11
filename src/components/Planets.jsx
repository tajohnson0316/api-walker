import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Form from "./Form";

const Planets = (props) => {
  const { planetID } = useParams();

  const [planet, setPlanet] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/planets/${planetID}`)
      .then((res) => {
        console.log(res.data);
        setPlanet(res.data);
      })
      .catch((error) => {
        console.log("❌", error);
        navigate("/notfound/droids");
      });
  }, [planetID]);

  return (
    <fieldset>
      <Form filter={props.filter} />
      {/* {JSON.stringify(planet)} */}
      <div>
        {planet ? (
          <>
            <h2>{planet.name}</h2>
            <p>
              <span className="fw-bold">Diameter:</span> {planet.diameter} km
            </p>
            <p>
              <span className="fw-bold">Population:</span> {planet.population}
            </p>
            <p>
              <span className="fw-bold">Terrain:</span> {planet.terrain}
            </p>
            <p>
              <span className="fw-bold">Orbital Period:</span>{" "}
              {planet.orbital_period} Earth days
            </p>
          </>
        ) : (
          <p>Looking for droids...</p>
        )}
      </div>
    </fieldset>
  );
};

export default Planets;
