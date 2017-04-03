import React, { Component } from 'react';
import './App.css';
// import createFragment from 'react-addons-create-fragment' // ES6

class TestTrack extends React.Component {
  constructor(props) {
    super(props);
    this.state = {students: [], name: '', extendTime: 0, testName: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <h3>Testing Room:</h3>
        <Classroom students={this.state.students} />
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} value={this.state.name} />
          <select type="number" value={this.state.extendTime} onChange={this.handleChange}>
            <option value={1.5}>1.5x</option>
            <option value={2}>2x</option>
            <option value={2.5}>2.5x</option>
            <option value={3}>3x</option>
          </select>
          <button>{'Add student #' + (this.state.students.length + 1)}</button>
        </form>
      </div>
    );
  }

  handleChange(e) {
    const value = e.target.type === "text" ? this.state.name : this.state.extendTime;
    this.setState({
      value: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    var newStudent = {
      name: this.state.name,
      id: Date.now(),
      extendTime: this.extendTime,
      testName: this.testName
    };
    this.setState((prevState) => ({
      students: prevState.students.concat(newStudent),
      name: ''
    }));
  }
}

class Classroom extends React.Component {
  render() {
    return(
      <ul>
        {this.props.students.map(student => (
          <li key={student.id}>{student.name}: </li>
        ))}
      </ul>
    );
  }
}
export default TestTrack;
// Contact GitHub API Training Shop Blog About
