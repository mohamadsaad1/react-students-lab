import "./App.css";
import Student from "./Student";
import studentsArr from "./studentsData";

function App() {
  const students = studentsArr.map(student => {
    return (
      <Student
        name={student.name}
        bio={student.bio}
        scores={student.scores}
      />
    );
  });

  return <div class="App">{students}</div>;
}

export default App;
