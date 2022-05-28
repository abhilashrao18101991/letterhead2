import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

class LetterHead extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            patientData: ""
        }
    }
    componentDidMount() {
        this.setState({ patientData: this.props.medicinesHistory ? this.props.medicinesHistory : {} });
    }
    render() {
        const patientInfo = this.state.patientData ? this.state.patientData.patientHistory : "";
        return (
            <div className="letter-head">
                <div className="patient-data-head">
                    <div className="row header-sec">
                        <div className="p-name">
                            {patientInfo ? patientInfo.patientName : ""}
                        </div>
                        <div className="age-value">
                            {patientInfo ? patientInfo.age : ""}
                        </div>
                        <div className="sex">
                            {patientInfo ? patientInfo.sex : ""}
                        </div>
                        <div className="co">
                            {patientInfo ? patientInfo.co : ""}
                        </div>
                    </div>
                    <div className="row header-2-data header-sec2">
                        <div className="weight">
                            {patientInfo ? patientInfo.weight : ""}
                        </div>
                        <div className="bp">
                            {patientInfo ? patientInfo.bp : ""}
                        </div>
                        <div className="bp">
                            {patientInfo ? patientInfo.temp : ""}
                        </div>
                        <div className="time">
                            {patientInfo ? patientInfo.time : ""}
                        </div>
                        <div className="date2">
                            {patientInfo ? patientInfo.date : ""}
                        </div>

                    </div>
                    <div className="checkbox-area">
                        <div className="row">
                            <div className="htn">
                                {patientInfo.isHtn === true ? <i className="fas fa-check"></i> : ""}
                            </div>
                            <div className="dm">
                                {patientInfo.isDm === true ? <i className="fas fa-check"></i> : ""}
                            </div>
                            <div className="ba">
                                {patientInfo.isBa === true ? <i className="fas fa-check"></i> : ""}
                            </div>
                            <div className="cad">
                                {patientInfo.isCad === true ? <i className="fas fa-check"></i> : ""}
                            </div>
                            <div className="ckd">
                                {patientInfo.isCkd === true ? <i className="fas fa-check"></i> : ""}
                            </div>
                            <div className="thyroid">
                                {patientInfo.isThyroid === true ? <i className="fas fa-check"></i> : ""}
                            </div>
                            <div className="drug">
                                {patientInfo.isDrug === true ? <i className="fas fa-check"></i> : ""}
                            </div>
                        </div>
                    </div>
                    <div className="right-side-data">
                        <div className="present-complaints">
                            {patientInfo ? patientInfo.presentComplaints : ""}
                        </div>
                        <div className="past-history">
                            {patientInfo ? patientInfo.pastHistory : ""}
                        </div>
                        <div className="findings">
                            {patientInfo ? patientInfo.findings : ""}
                        </div>
                        <div className="provisional">
                            {patientInfo ? patientInfo.provDiagnosis : ""}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default LetterHead;
