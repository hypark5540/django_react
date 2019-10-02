import React, { Component } from "react";
import {
    Chart,
    Geom,
    Axis,
    Tooltip,
    Coord,
    Legend
} from 'bizcharts';
import { connect } from "react-redux";
import { getLeads } from "../../actions/leads";
import DataSet from "@antv/data-set";



export class PieChart extends Component {



    componentDidMount() {
        this.props.getLeads();
    }

    render() {
        console.log(this.props.leads)

        const ds = new DataSet();
        const dv = ds.createView().source(this.props.leads);
        dv.transform({
            type: "percent",
            field: "result",
            dimension: "label",
            as: "percent"
        });

        const cols = {
            percent: {
                formatter: val => {
                    val = (val * 100) + "%";
                    return val;
                }
            }
        }
        console.log(dv)
        return (



            <div>

                <Chart height={window.innerHeight * (4 / 5)} data={dv} scale={cols} forceFit>
                    <Coord type="theta" radius={0.75} />
                    <Axis name="percent" />
                    <Legend />
                    <Tooltip
                        showTitle={false}
                        itemTpl="<li><span style=&quot;background-color:{color};&quot; class=&quot;g2-tooltip-marker&quot;></span>{name}: {value}</li>"
                    />
                    <Geom
                        type="intervalStack"
                        position="percent"
                        color="label"
                        tooltip={[
                            "label*percent",
                            (label, percent) => {
                                percent = percent * 100 + "%"
                                return {
                                    name: label,
                                    value: typeof percent === 'number' ? percent : Number(percent).toFixed(1)
                                };
                            }
                        ]}
                        style={{
                            lineWidth: 1,
                            stroke: "#fff"
                        }}
                    />

                </Chart>
            </div>



        );
    }


}

const mapStateToProps = state => ({
    leads: state.leads.leads
});

export default connect(mapStateToProps, { getLeads })(PieChart);