import React, { Component } from 'react';
import './App.css';
// import createFragment from 'react-addons-create-fragment' // ES6

class TestTrack extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      extendRate: 0,
      firstStartTime: 0,
      firstStandTime: 0,
      firstStandEndTime: 0,
      firstExtendEndTime: 0,
      secondStartTime: 0,
      secondStandTime: 0,
      secondStandEndTime: 0,
      secondExtendEndTime: 0,

    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({name: event.target.value});
  }

  handleSubmit(event) {
    // alert('A student was submitted: ' + this.state.name);

    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.name} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <div className="testDashboard">
          <p>students: </p>
          <Classroom student={this.state.name}/>
        </div>
      </div>
    );
  }
}

class Classroom extends React.Component {
  renderStudent() {
    return <Student value={this.props.student} num={1}/>;
  }
  render() {
    return(
      <div>
        <div className="student-row">
          {this.renderStudent()}
        </div>
      </div>
    );
  }
}

function Student(props) {
  return (
    <li key={props.num} className="student">
      {props.value}
    </li>
  );
}

export default TestTrack;
