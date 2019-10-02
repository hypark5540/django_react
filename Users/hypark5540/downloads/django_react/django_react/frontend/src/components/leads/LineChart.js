import React, { Component } from "react";
import { Chart, Geom, Axis, Tooltip, Legend } from 'bizcharts';
import { connect } from "react-redux";
import { getLeads } from "../../actions/leads";


export class LineChart extends Component {



    render() {

        console.log(this.props.leads)
        return (


            <div>
                <Chart height={window.innerHeight * (2 / 5)} data={this.props.leads} padding={[100, 40, 50, 80]} forceFit>
                    <Axis name="logdate" />
                    <Axis name="result" />
                    <Legend />
                    <Tooltip
                        crosshairs={{
                            type: "y"
                        }}
                    />
                    <Geom
                        type="line"
                        position="logdate*result"
                        color="label"

                    />
                </Chart>


            </div>


        );
    }


}


const mapStateToProps = state => ({
    leads: state.leads.leads
});

export default connect(mapStateToProps, { getLeads })(LineChart);