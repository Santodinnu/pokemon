import React, { Fragment } from "react";

const myStyle = {
  color: "#ffffff",
  backgroundColor: "#000000",
};

const expression = /(\b[a-z](?!\s))/g;

export default function Index({ pokemon }) {
  return (
    <>
      <h1 style={myStyle}>See all the Pokemon!</h1>
      {pokemon && (
        <ul>
          {pokemon.map((poke, i) => (
            <Fragment key={poke.name}>
              <li>
                <a href={`/pokemon/${i}`}>
                  {poke.name.replace(expression, function (x) {
                    return x.toUpperCase();
                  })}
                </a>
              </li>
            </Fragment>
          ))}
        </ul>
      )}
    </>
  );
}

