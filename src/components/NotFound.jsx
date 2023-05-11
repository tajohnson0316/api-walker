import React from "react";
import Form from "./Form";

const NotFound = (props) => {
  return (
    <div>
      <Form />
      <div className="text-center">
        <h2>These are not the droids you are looking for...</h2>
        <p>Your search did not return any results. Feel free to try again.</p>
        <img
          src="https://preview.redd.it/6o6blcul5n841.jpg?auto=webp&s=ccfaf79f8c679b8d075131e67319d955cda25a30"
          alt=""
        />
      </div>
    </div>
  );
};

export default NotFound;
