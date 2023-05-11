import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Form from "./Form";

const Vehicles = (props) => {
  const { vehicleID } = useParams();

  const [vehicle, setVehicle] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/vehicles/${vehicleID}`)
      .then((res) => {
        console.log(res.data);
        setVehicle(res.data);
      })
      .catch((error) => {
        console.log("❌", error);
        navigate("/notfound/droids");
      });
  }, [vehicleID]);

  return (
    <fieldset>
      <Form filter={props.filter} />
      {/* {JSON.stringify(vehicle)} */}
      <div>
        {vehicle ? (
          <>
            <h2>{vehicle.name}</h2>
            <p>
              <span className="fw-bold">Vehicle Class:</span>{" "}
              {vehicle.vehicle_class}
            </p>
            <p>
              <span className="fw-bold">Length:</span> {vehicle.length} m
            </p>
            <p>
              <span className="fw-bold">Cost:</span> {vehicle.cost_in_credits}{" "}
              Galactic credits
            </p>
            <p>
              <span className="fw-bold">Min. Crew Size:</span> {vehicle.crew}{" "}
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

export default Vehicles;
