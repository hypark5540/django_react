import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getLeads, deleteLead } from "../../actions/leads";
import { addDemo, deleteDemo } from "../../actions/demo";

export class Leads extends Component {
    static PropTypes = {
        leads: PropTypes.array.isRequired,
        getLeads: PropTypes.func.isRequired,
        deleteLead: PropTypes.func.isRequired

    };

    componentDidMount() {
        this.props.getLeads();
    }
    render() {
        console.log(this.props.leads)

        return (
            <Fragment>
                <h2>Leads</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>날짜수</th>
                            <th>NRU</th>
                            <th>PUR</th>
                            <th>ARPPU</th>
                            <th>목표달성액</th>
                            <th>created_date</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.leads.map(lead => (
                            <tr key={lead.id}>
                                <td>{lead.id}</td>
                                <td>{lead.numberOfDate}</td>
                                <td>{lead.nru}</td>
                                <td>{lead.pur}</td>
                                <td>{lead.arppu}</td>
                                <td>{lead.goalMoney}</td>
                                <td>{lead.created_at}</td>
                                <td>
                                    <button onClick={this.props.deleteLead.bind(this, lead.id)} className="btn btn-danger btn-sm">
                                        {" "}
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    leads: state.leads.leads
});

export default connect(mapStateToProps, { getLeads, deleteLead })(Leads);
