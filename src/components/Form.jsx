import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = (props) => {
  const [filter, setFilter] = useState(props.filter);
  const [searchID, setSearchID] = useState(1);

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/${filter}/${searchID}`);
  };

  return (
    <div className="mb-3">
      <h1 className="mb-3 text-center">Luke APIwalker</h1>
      <form
        className="d-flex justify-content-between align-items-center gap-3"
        onSubmit={submitHandler}
      >
        <select
          name="filter"
          id="filter"
          className="form-select"
          defaultValue={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="default">Choose a filter</option>
          <option value="people">People</option>
          <option value="films">Films</option>
          <option value="starships">Starships</option>
          <option value="vehicles">Vehicles</option>
          <option value="species">Species</option>
          <option value="planets">Planets</option>
        </select>
        <label htmlFor="idInput" className="form-label">
          ID:
        </label>
        <input
          type="number"
          min={1}
          name="idInput"
          id="idInput"
          className="form-control"
          value={searchID}
          onChange={(e) => setSearchID(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">
          Search
        </button>
      </form>
    </div>
  );
};

export default Form;
