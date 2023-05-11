import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Form from "./Form";

const People = (props) => {
  const { personID } = useParams();

  const [person, setPerson] = useState(null);
  const [homeworldName, setHomeworldName] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/people/${personID}`)
      .then((res) => {
        console.log(res.data);
        setPerson(res.data);
      })
      .catch((error) => {
        console.log("❌", error);
        navigate("/notfound/droids");
      });
  }, [personID, navigate]);

  const getHomeworldName = () => {
    axios
      .get(person.homeworld)
      .then((res) => {
        console.log(res.data);
        setHomeworldName(res.data.name);
      })
      .catch((error) => {
        console.log("❌", error);
      });
  };

  return (
    <fieldset>
      <Form filter={props.filter} />
      {/* {JSON.stringify(person)} */}
      <div>
        {person ? (
          <>
            {getHomeworldName()}
            <h2>{person.name}</h2>
            <p>
              <span className="fw-bold">Height:</span> {person.height} cm
            </p>
            <p>
              <span className="fw-bold">Mass:</span> {person.mass} kg
            </p>
            <p>
              <span className="fw-bold">Hair Color:</span> {person.hair_color}
            </p>
            <p>
              <span className="fw-bold">Skin Color:</span> {person.skin_color}
            </p>
            {homeworldName.length > 0 ? (
              <p>
                <span className="fw-bold">Homeworld:</span> {homeworldName}
              </p>
            ) : (
              <p>
                <span className="fw-bold">Homeworld:</span> loading...
              </p>
            )}
          </>
        ) : (
          <p>Looking for droids...</p>
        )}
      </div>
    </fieldset>
  );
};

export default People;
