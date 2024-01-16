// Show.jsx
import React from "react";

const expression = /(\b[a-z](?!\s))/g;

const inLineStyle = {
  color: "#ffffff",
  backgroundColor: "#000000",
};

export default function Show({ pokemon }) {
  return (
    <div>
      <h1 style={inLineStyle}>Gotta Catch 'Em All</h1>
      <h2>
        {pokemon.name.replace(expression, function (x) {
          return x.toUpperCase();
        })}
      </h2>
      <img src={`${pokemon.img}.jpg`} alt="" />
      <h4><a href={`/pokemon`}>Back</a></h4>
    </div>
  );
}

