import React, { Component } from "react";
import { Chart, Geom, Axis, Tooltip, Legend, Facet, View, Label } from 'bizcharts';
import { connect } from "react-redux";
import { getDemo } from "../../actions/demo";
import PropTypes from "prop-types";
// import DataSet from "@antv/data-set";


export class GridChart extends Component {
    // Real Render Start
    static PropTypes = {
        demo: PropTypes.array.isRequired,
        getDemo: PropTypes.func.isRequired,
        deleteDemo: PropTypes.func.isRequired

    };

    componentDidMount() {
        this.props.getDemo();
    }
    // REal Render End

    render() {

        const cols = {
            col_a: {

            },
            col_b: {

            },
            ret: {
                // Make Graph Smooth
                // alias: 'col_a',
                type: "linear",
                min: 0,
                max: 1
            },
            logdate: {
                min: 'D1',
                max: 'D30',
                ticks: ['D1', 'D15', 'D30']
            }

        };
        console.log(this.props.demo)
        return (

            <div>
                <Chart
                    height={window.innerHeight}
                    scale={cols}
                    data={this.props.demo}
                    // padding={[100, 40, 50, 80]}
                    forceFit>
                    <Axis name="col_a" />
                    <Axis name="col_b" />
                    <Legend />
                    <Tooltip
                        crosshairs={{
                            type: "y"
                        }}
                        showTitle={true}
                        itemTpl='<li>
                        <span style="background-color:{color};
                        " class="g2-tooltip-marker">
                        </span>
                        issuccess : {issuccess}
                        <br>
                        <b>
                        ret : {ret}
                        </b>
                        <br>
                        a : {row}
                        <br>
                        b : {col}
                        <br>
                        <b>
                        total : {total}
                        </b>
                        </li>'
                        
                    />


                    <Facet
                        type='rect'
                        cols={10}
                        fields={['col_a', 'col_b']}
                        colTitle={{
                            offsetY: 10,
                            style: {
                                fontSize: 14,
                                textAlign: 'left',
                                fill: '#444'
                            }
                        }}
                        rowTitle={{
                            offsetX: -15,
                            style: {
                                fontSize: 14,
                                textAlign: 'down',
                                fill: '#444'
                            }
                        }}
                    >

                        <View>

                            <Geom
                                type="line"
                                position="logdate*ret"
                                color="issuccess"
                                size={3}
                                shape={"smooth"}
                                tooltip={['issuccess*ret*col_a*col_b*total', (issuccess, ret, col_a, col_b, total) => {
                                    ret = (ret * 100).toFixed(0) + '%'
                                    total = total + '만원'
                                    // custom tmp_value in this line
                                    return {
                                      issuccess : issuccess,
                                      ret : ret,
                                      row : col_a,
                                      col : col_b,
                                      total : total
                                    };
                                  }]}

                            >

                            </Geom>


                        </View>

                    </Facet>

                </Chart>


            </div>


        );
    }


}


const mapStateToProps = state => ({
    demo: state.demo.demo
});

export default connect(mapStateToProps, { getDemo })(GridChart);