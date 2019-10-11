import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getDemo, deleteDemo } from "../../actions/demo";

export class Demo extends Component {
    static PropTypes = {
        demo: PropTypes.array.isRequired,
        getDemo: PropTypes.func.isRequired,
        deleteDemo: PropTypes.func.isRequired

    };

    // Real Rendering Function
    componentDidMount() {
        this.props.getDemo();
    }

    render() {
        console.log(this.props.demo.arppu)
        return (
            <Fragment>
                <h2>Demo</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>logdate</th>
                            <th>col_a</th>
                            <th>col_b</th>
                            <th>arppu</th>
                            <th>output</th>
                            <th>total</th>
                            <th>issuccess</th>
                            <th>servicecountry</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.demo.map(demo => (
                            <tr key={demo.id}>
                                <td>{demo.id}</td>
                                <td>{demo.logdate}</td>
                                <td>{demo.col_a}</td>
                                <td>{demo.col_b}</td>
                                <td>{demo.arppu}</td>
                                <td>{demo.output}</td>
                                <td>{demo.total}</td>
                                <td>{demo.issuccess}</td>
                                <td>{demo.servicecountry}</td>
                                <td>
                                    <button onClick={this.props.deleteDemo.bind(this, demo.id)} className="btn btn-danger btn-sm">
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
    demo: state.demo.demo
});

export default connect(mapStateToProps, { getDemo, deleteDemo })(Demo);
