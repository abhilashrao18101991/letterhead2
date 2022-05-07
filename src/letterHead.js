import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import letter from './letter-head.jpeg';

class LetterHead extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            patientData: ""
        }
    }
    componentDidMount() {
        this.setState({ patientData: this.props.patientHistory });
    }
    render() {
        const patientInfo = this.state.patientData;
        return (
            <div className="letter-head">
                <div className="patient-data-head">
                    <div className="row">
                        <div className="col-5">
                            {patientInfo.patientName}
                        </div>
                        <div className="col-1 age">
                            {patientInfo.age}
                        </div>
                        <div className="col-1 age">
                            {patientInfo.sex}
                        </div>
                        <div className="col-1">
                            {patientInfo.co}
                        </div>
                    </div>
                    <div className="row header-2-data">
                        <div className="col-2">
                            {patientInfo.weight}
                        </div>
                        <div className="col-2 second-row">
                            {patientInfo.bp}
                        </div>
                        <div className="col-2">
                            {patientInfo.temp}
                        </div>
                        <div className="col-2">
                            {patientInfo.time}
                        </div>
                        <div className="col-2 second-column">
                            {patientInfo.date}
                        </div>

                    </div>
                    <div className="right-side-data">
                        <div className="present-complaints">
                            {patientInfo.presentComplaints}
                        </div>
                        <div className="past-history">
                            {patientInfo.pastHistory}
                        </div>
                        <div className="findings">
                            {patientInfo.findings}
                        </div>
                        <div className="provisional">
                            {patientInfo.provDiagnosis}
                        </div>

                    </div>


                </div>
            </div>
        )
    }
}
export default LetterHead;
