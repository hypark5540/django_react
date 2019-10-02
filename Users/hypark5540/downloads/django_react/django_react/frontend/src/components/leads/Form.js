import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addLead } from "../../actions/leads";



export class Form extends Component {
    state = {
        numberOfDate: "",
        nru: "",
        pur: "",
        arppu: "",
        goalMoney: ""
    };

    static PropTypes = {
        addLead: PropTypes.func.isRequired
    };

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    onSubmit = e => {
        e.preventDefault();
        const { numberOfDate, nru, pur, arppu, goalMoney } = this.state;
        const lead = { numberOfDate, nru, pur, arppu, goalMoney };
        this.props.addLead(lead);
        this.setState({
            numberOfDate: "",
            nru: "",
            pur: "",
            arppu: "",
            goalMoney: ""
        });
    };

    render() {
        const { numberOfDate, nru, pur, arppu, goalMoney } = this.state;
        return (
            <div className="card card-body mt-4 mb-4">
                <h2>Start Sims</h2>
                <form onSubmit={this.onSubmit}>
                    <div className="form-row">
                        <div class="col-md-4 mb-3">
                            <label for="numberOfDate">날짜수</label>
                            <input className="form-control" type="number" name="numberOfDate" onChange={this.onChange} value={numberOfDate} id="numberOfDate" placeholder="날짜수를 입력하세요" min="1" max="31" required />
                            <div class="invalid-feedback">
                                범위내의 값을 입력해주세요 ( 1 ~ 31 )
                            </div>
                        </div>

                        <div class="col-md-4 mb-3">
                            <label for="nru">NRU</label>
                            <input type="number" className="form-control" id="nru" name="nru" placeholder="NRU를 입력하세요" min="0" onChange={this.onChange} value={nru} required />
                            <div class="invalid-feedback">
                                0 이상의 숫자를 넣어주세요
                            </div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div class="col-md-4 mb-3">
                            <label for="pur">PUR</label>
                            <input type="number" className="form-control" id="pur" name="pur" placeholder="NRU를 입력하세요" min="0" max="100" onChange={this.onChange} value={pur} required />
                            <div class="invalid-feedback">
                                0 ~ 100 사이 숫자를 넣어주세요
                            </div>
                        </div>

                        <div class="col-md-4 mb-3">
                            <label for="arppu">ARPPU</label>
                            <input type="number" className="form-control" id="arppu" name="arppu" placeholder="ARPPU를 입력하세요" min="0" onChange={this.onChange} value={arppu} required />
                            <div class="invalid-feedback">
                                0 이상의 숫자를 넣어주세요
                            </div>
                        </div>

                        <div class="col-md-4 mb-3">
                            <label for="goalmoney">목표달성액</label>
                            <input type="number" className="form-control" id="goalmoney" name="goalMoney" placeholder="목표달성액을 입력하세요 ( 기본단위: 만원 ) " min="0" onChange={this.onChange} value={goalMoney} required />
                            <div class="invalid-feedback">
                                0 이상의 숫자를 넣어주세요
                            </div>
                        </div>

                    </div>


                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default connect(null, { addLead })(Form);
