import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Form from "./Form";

const Films = (props) => {
  const { filmID } = useParams();

  const [film, setFilm] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/films/${filmID}`)
      .then((res) => {
        console.log(res.data);
        setFilm(res.data);
      })
      .catch((error) => {
        console.log("❌", error);
        navigate("/notfound/droids");
      });
  }, [filmID]);

  return (
    <fieldset>
      <Form filter={props.filter} />
      {/* {JSON.stringify(film)} */}
      <div>
        {film ? (
          <>
            <h2>{film.title}</h2>
            <p>
              <span className="fw-bold">Episode:</span> {film.episode_id}
            </p>
            <p>
              <span className="fw-bold">Release Date:</span> {film.release_date}
            </p>
            <p>
              <span className="fw-bold">Producer(s):</span> {film.producer}
            </p>
            <p>
              <span className="fw-bold">Opening Crawl:</span>{" "}
              {film.opening_crawl}
            </p>
          </>
        ) : (
          <p>Looking for droids...</p>
        )}
      </div>
    </fieldset>
  );
};

export default Films;
