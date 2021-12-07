import React from "react";


function Score(props) {
  return (
    <>
        <h2> Date:{props.date} </h2>
        <h3> Score:{props.score} </h3>
      </>

  );
}

export default Score;