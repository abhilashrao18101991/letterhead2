import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import LetterHead from './letterHead';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      sex: "",
      co: "",
      weight: "",
      bp: "",
      temp: "",
      time: "",
      date: "",
      presentComplaints: "",
      pastHistory: "",
      findings: "",
      provDiagnosis: "",
      doctorTab: true,
      letterHeadTab: false,
      patientHistory: ""
    }
  }
  onChangeInput = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value });
  }
  handleSubmit = () => {
    const state = this.state;
    const userData = {
      patientName: state.name,
      age: state.age,
      sex: state.sex,
      co: state.co,
      weight: state.weight,
      bp: state.bp,
      temp: state.temp,
      time: state.time,
      date: state.date,
      presentComplaints: state.presentComplaints,
      pastHistory: state.pastHistory,
      findings: state.findings,
      provDiagnosis: state.provDiagnosis,
    }
    this.setState({ patientHistory: userData, doctorTab: false, letterHeadTab: true });
  }
  render() {
    return (
      <>
        {this.state.doctorTab && (
          <div className='App container'>
            <div className="input_fields row">
              <div className="col-4">
                <label>Patient Name:</label>
              </div>
              <div className="col-8">
                <input type="text" name="name" value={this.state.name} onChange={this.onChangeInput} />
              </div>
            </div>
            <div className="input_fields row">
              <div className="col-4">
                <label>Age:</label>
              </div>
              <div className="col-8">
                <input type="text" name="age" value={this.state.age} onChange={this.onChangeInput} />
              </div>
            </div>
            <div className="input_fields row">
              <div className="col-4">
                <label>Sex:</label>
              </div>
              <div className="col-8">
                <input type="text" name="sex" value={this.state.sex} onChange={this.onChangeInput} />
              </div>
            </div>
            <div className="input_fields row">
              <div className="col-4">
                <label>C/o:</label>
              </div>
              <div className="col-8">
                <input type="text" name="co" value={this.state.co} onChange={this.onChangeInput} />
              </div>
            </div>
            <div className="input_fields row">
              <div className="col-4">
                <label>Weight:</label>
              </div>
              <div className="col-8">
                <input type="text" name="weight" value={this.state.weight} onChange={this.onChangeInput} />
              </div>
            </div>
            <div className="input_fields row">
              <div className="col-4">
                <label>B.P:</label>
              </div>
              <div className="col-8">
                <input type="text" name="bp" value={this.state.bp} onChange={this.onChangeInput} />
              </div>
            </div>
            <div className="input_fields row">
              <div className="col-4">
                <label>Temp.:</label>
              </div>
              <div className="col-8">
                <input type="text" name="temp" value={this.state.temp} onChange={this.onChangeInput} />
              </div>
            </div>
            <div className="input_fields row">
              <div className="col-4">
                <label>Time:</label>
              </div>
              <div className="col-8">
                <input type="text" name="time" value={this.state.time} onChange={this.onChangeInput} />
              </div>
            </div>
            <div className="input_fields row">
              <div className="col-4">
                <label>Date:</label>
              </div>
              <div className="col-8">
                <input type="date" name="date" value={this.state.date} onChange={this.onChangeInput} />
              </div>
            </div>
            <div className="input_fields row">
              <div className="col-4">
                <label>Present Complaints with Duration:</label>
              </div>
              <div className="col-8">
                <textarea name="presentComplaints" value={this.state.presentComplaints} onChange={this.onChangeInput} rows="5" cols="35" />
              </div>
            </div>
            <div className="input_fields row">
              <div className="col-4">
                <label>Past History:</label>
              </div>
              <div className="col-8">
                <textarea name="pastHistory" value={this.state.pastHistory} onChange={this.onChangeInput} rows="5" cols="35" />
              </div>
            </div>
            <div className="input_fields row">
              <div className="col-4">
                <label>Findings:</label>
              </div>
              <div className="col-8">
                <textarea name="findings" value={this.state.findings} onChange={this.onChangeInput} rows="5" cols="35" />
              </div>
            </div>
            <div className="input_fields row">
              <div className="col-4">
                <label>Provisional Diagnosis:</label>
              </div>
              <div className="col-8">
                <textarea name="provDiagnosis" value={this.state.provDiagnosis} onChange={this.onChangeInput} rows="5" cols="35" />
              </div>
            </div>
            <div className="row">
              <button onClick={this.handleSubmit}>Send Details</button>
            </div>
          </div>
        )}
        {this.state.letterHeadTab && (
          <LetterHead patientHistory={this.state.patientHistory}/>
        )}
      </>
    )
  }
}

export default App;
