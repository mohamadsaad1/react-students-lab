import React from "react";
import Score from "./Score";


function Student(props) {
  const scores = props.scores.map(ele => {
    return < Score score={ele.score} date={ele.date} />;
  });

  return (
    <>
            <h2>{props.name}</h2>
            <h4>{props.bio}</h4>
            <h5>{scores}</h5>

{/* alternatively, without mapping 
            <h2> {props.name} </h2>
            <h4> {props.bio} </h4>
            <h5> Date: {props.scores[0].date}</h5>
            <h5> Score: {props.scores[0].score}</h5>
            <h5> Date: {props.scores[1].date}</h5>
            <h5> Score: {props.scores[1].score}</h5>
            <h5> Date: {props.scores[2].date}</h5>
            <h5> Score: {props.scores[2].score}</h5> */}
          
      
    </>
  );
}
export default Student;