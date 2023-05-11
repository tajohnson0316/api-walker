import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Form from "./Form";

const Species = (props) => {
  const { speciesID } = useParams();

  const [species, setSpecies] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/species/${speciesID}`)
      .then((res) => {
        console.log(res.data);
        setSpecies(res.data);
      })
      .catch((error) => {
        console.log("❌", error);
        navigate("/notfound/droids");
      });
  }, [speciesID]);
  return (
    <fieldset>
      <Form filter={props.filter} />
      {/* {JSON.stringify(species)} */}
      <div>
        {species ? (
          <>
            <h2>{species.name}</h2>
            <p>
              <span className="fw-bold">Homeworld:</span> IN DEVELOPMENT
            </p>
            <p>
              <span className="fw-bold">Language:</span> {species.language}
            </p>
            <p>
              <span className="fw-bold">Avg. Lifespan:</span>{" "}
              {species.average_lifespan} Earth years
            </p>
            <p>
              <span className="fw-bold">Classification:</span>{" "}
              {species.classification}
            </p>
          </>
        ) : (
          <p>Looking for droids...</p>
        )}
      </div>
    </fieldset>
  );
};

export default Species;
