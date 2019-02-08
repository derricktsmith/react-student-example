import React, { Component } from "react";
import styled from "styled-components";

// #region Styled Components
const Styles = styled.div`
  p {
    color: red;
  }
`;
// #endregion
class App extends Component {
  state = {
    isMenuOpen: false,
    students: [
      {
        name: "Billy",
        age: 24
      },
      {
        name: "Bill Go",
        age: 27
      },
      {
        name: "Sam",
        age: 21
      },
      {
        name: "Cam",
        age: 20
      }
    ]
  };
  render() {
    const newStudents = this.state.students.map(student => ({
      ...student,
      isPresent: false
    }));
    newStudents[1].isPresent = true;
    return (
      <Styles>
        <p>Hi, Derrick! You have ReactJS on your machine here.</p>
        <h1>Students</h1>
        <ul>
          {newStudents
            .filter(student => student.isPresent)
            .map(student => {
              return (
                <li>
                  {student.name} is {student.age}
                </li>
              );
            })}
        </ul>
      </Styles>
    );
  }
}

export default App;
