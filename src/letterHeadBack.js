import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import moment from 'moment';

class LetterHeadBack extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            medicinesData: ""
        }
    }
    componentDidMount() {
        this.setState({ medicinesData: this.props.medicinesHistory });
    }
    render() {
        const medicinesInfo = this.state.medicinesData;
        const date = moment(new Date()).format('DD/MM/YYYY');
        const time = moment(new Date()).format('h:mm a');
        return (
            <div className="letter-head-back">
                <div className="medicine-data-head">
                    <div className="row med1">
                        <div className="medicine-name">
                            {medicinesInfo.medicine1}
                        </div>
                        <div className="week-check check-mark">
                            {medicinesInfo.isBeforeMorningFood1 === true ? <i className="fas fa-check"></i> : ""}
                        </div>
                        <div className="week-check check-mark">
                            {medicinesInfo.isAfterMorningFood1 === true ? <i className="fas fa-check"></i> : ""}
                        </div>
                        <div className="week-check check-mark">
                            {medicinesInfo.isBeforeAfternoonFood1 === true ? <i className="fas fa-check"></i> : ""}
                        </div>
                        <div className="week-check check-mark">
                            {medicinesInfo.isAfterAfternoonFood1 === true ? <i className="fas fa-check"></i> : ""}
                        </div>
                        <div className="week-check check-mark">
                            {medicinesInfo.isBeforeNightFood1 === true ? <i className="fas fa-check"></i> : ""}
                        </div>
                        <div className="week-check check-mark">
                            {medicinesInfo.isAfterNightFood1 === true ? <i className="fas fa-check"></i> : ""}
                        </div>
                        <div className="duration">
                            {medicinesInfo.duration1}
                        </div>
                    </div>
                    <div className="row medicine">
                        <div className="medicine-name">
                            {medicinesInfo.medicine2}
                        </div>
                        <div className="check-mark">
                            {medicinesInfo.isBeforeMorningFood2 === true ? <i className="fas fa-check"></i> : ""}
                        </div>
                        <div className="check-mark">
                            {medicinesInfo.isAfterMorningFood2 === true ? <i className="fas fa-check"></i> : ""}
                        </div>
                        <div className="check-mark">
                            {medicinesInfo.isBeforeAfternoonFood2 === true ? <i className="fas fa-check"></i> : ""}
                        </div>
                        <div className="check-mark">
                            {medicinesInfo.isAfterAfternoonFood2 === true ? <i className="fas fa-check"></i> : ""}
                        </div>
                        <div className="check-mark">
                            {medicinesInfo.isBeforeNightFood2 === true ? <i className="fas fa-check"></i> : ""}
                        </div>
                        <div className="check-mark">
                            {medicinesInfo.isAfterNightFood2 === true ? <i className="fas fa-check"></i> : ""}
                        </div>
                        <div className="duration">
                            {medicinesInfo.duration2}
                        </div>
                    </div>
                    <div className="row medicine">
                        <div className="medicine-name">
                            {medicinesInfo.medicine3}
                        </div>
                        <div className="check-mark">
                            {medicinesInfo.isBeforeMorningFood3 === true ? <i className="fas fa-check"></i> : ""}
                        </div>
                        <div className="check-mark">
                            {medicinesInfo.isAfterMorningFood3 === true ? <i className="fas fa-check"></i> : ""}
                        </div>
                        <div className="check-mark">
                            {medicinesInfo.isBeforeAfternoonFood3 === true ? <i className="fas fa-check"></i> : ""}
                        </div>
                        <div className="check-mark">
                            {medicinesInfo.isAfterAfternoonFood3 === true ? <i className="fas fa-check"></i> : ""}
                        </div>
                        <div className="check-mark">
                            {medicinesInfo.isBeforeNightFood3 === true ? <i className="fas fa-check"></i> : ""}
                        </div>
                        <div className="check-mark">
                            {medicinesInfo.isAfterNightFood3 === true ? <i className="fas fa-check"></i> : ""}
                        </div>
                        <div className="duration">
                            {medicinesInfo.duration3}
                        </div>
                    </div>
                    <div className="row medicine">
                        <div className="medicine-name">
                            {medicinesInfo.medicine4}
                        </div>
                        <div className="check-mark">
                            {medicinesInfo.isBeforeMorningFood4 === true ? <i className="fas fa-check"></i> : ""}
                        </div>
                        <div className="check-mark">
                            {medicinesInfo.isAfterMorningFood4 === true ? <i className="fas fa-check"></i> : ""}
                        </div>
                        <div className="check-mark">
                            {medicinesInfo.isBeforeAfternoonFood4 === true ? <i className="fas fa-check"></i> : ""}
                        </div>
                        <div className="check-mark">
                            {medicinesInfo.isAfterAfternoonFood4 === true ? <i className="fas fa-check"></i> : ""}
                        </div>
                        <div className="check-mark">
                            {medicinesInfo.isBeforeNightFood4 === true ? <i className="fas fa-check"></i> : ""}
                        </div>
                        <div className="check-mark">
                            {medicinesInfo.isAfterNightFood4 === true ? <i className="fas fa-check"></i> : ""}
                        </div>
                        <div className="duration">
                            {medicinesInfo.duration4}
                        </div>
                    </div>
                    <div className="row medicine">
                        <div className="medicine-name">
                            {medicinesInfo.medicine5}
                        </div>
                        <div className="check-mark">
                            {medicinesInfo.isBeforeMorningFood5 === true ? <i className="fas fa-check"></i> : ""}
                        </div>
                        <div className="check-mark">
                            {medicinesInfo.isAfterMorningFood5 === true ? <i className="fas fa-check"></i> : ""}
                        </div>
                        <div className="check-mark">
                            {medicinesInfo.isBeforeAfternoonFood5 === true ? <i className="fas fa-check"></i> : ""}
                        </div>
                        <div className="check-mark">
                            {medicinesInfo.isAfterAfternoonFood5 === true ? <i className="fas fa-check"></i> : ""}
                        </div>
                        <div className="check-mark">
                            {medicinesInfo.isBeforeNightFood5 === true ? <i className="fas fa-check"></i> : ""}
                        </div>
                        <div className="check-mark">
                            {medicinesInfo.isAfterNightFood5 === true ? <i className="fas fa-check"></i> : ""}
                        </div>
                        <div className="duration">
                            {medicinesInfo.duration5}
                        </div>
                    </div>
                    <div className="row medicine">
                        <div className="medicine-name">
                            {medicinesInfo.medicine6}
                        </div>
                        <div className="check-mark">
                            {medicinesInfo.isBeforeMorningFood6 === true ? <i className="fas fa-check"></i> : ""}
                        </div>
                        <div className="check-mark">
                            {medicinesInfo.isAfterMorningFood6 === true ? <i className="fas fa-check"></i> : ""}
                        </div>
                        <div className="check-mark">
                            {medicinesInfo.isBeforeAfternoonFood6 === true ? <i className="fas fa-check"></i> : ""}
                        </div>
                        <div className="check-mark">
                            {medicinesInfo.isAfterAfternoonFood6 === true ? <i className="fas fa-check"></i> : ""}
                        </div>
                        <div className="check-mark">
                            {medicinesInfo.isBeforeNightFood6 === true ? <i className="fas fa-check"></i> : ""}
                        </div>
                        <div className="check-mark">
                            {medicinesInfo.isAfterNightFood6 === true ? <i className="fas fa-check"></i> : ""}
                        </div>
                        <div className="duration">
                            {medicinesInfo.duration6}
                        </div>
                    </div>
                    <div className="row medicine">
                        <div className="med-name">
                            {medicinesInfo.medicine7}
                        </div>
                    </div>
                    <div className="row medicine">
                        <div className="med-name">
                            {medicinesInfo.medicine8}
                        </div>
                    </div>
                    <div className="row diet">
                        <div>
                            {medicinesInfo.diet}
                        </div>
                    </div>
                    <div className="row investigations">
                        <div style={{ width: "320px"}}>
                            {medicinesInfo.invAdviced}
                        </div>
                        <div style={{ width: "320px", marginLeft: '50px'}}>
                            {medicinesInfo.phyAdviced}
                        </div>
                    </div>
                    <div className="row review">
                        <div className="col-5">
                            {medicinesInfo.review}
                        </div>
                        <div className="col-5">
                            <div className="date">{date}</div>
                            <div className="date">{time}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default LetterHeadBack;
