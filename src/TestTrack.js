import React, { Component } from 'react';
import createFragment from 'react-addons-create-fragment' // ES6
import './App.css';

class TestTrack extends React.Component {
  constructor() {
    super();
    this.student = {
      id: "bob",
      extendRate: 0,
      firstStartTime: 0,
      firstStandTime: 0,
      firstStandEndTime: 0,
      firstExtendEndTime: 0,
      secondStartTime: 0,
      secondStandTime: 0,
      secondStandEndTime: 0,
      secondExtendEndTime: 0
    }
    this.state = {
      students: Array(5).fill(this.student)
    };
  }
  render() {
    const classroom = this.state.students;
    const students = classroom.slice();

    return (
      <div className="testDashboard">
        <p>students: </p>
        <Classroom
            students={students}
        />
      </div>
    );
  }
}

class Classroom extends React.Component {
  renderStudent(i) {
    return <Student value={this.props.students[i]}/>;
  }
  render() {
    return(
      <div>
        <div className="student-row">
          {this.renderStudent(0)}
          {this.renderStudent(1)}
          {this.renderStudent(2)}
          {this.renderStudent(3)}
          {this.renderStudent(4)}
        </div>
      </div>
    );
  }
}

function Student(props) {
  return (
    <div className="student">
      {props.value}
    </div>
  );
}

export default TestTrack;
