import React, { Fragment } from "react";
import Form from "./Form";
import Leads from "./Leads";
import Demo from "./Demo";
import LineChart from "./LineChart";
import PieChart from "./PieChart";
import GridChart from "./GridChart";


export default function Dashboard() {
    return (
        <Fragment>
            <Form />
            <Leads />
            {/* <LineChart /> */}
            {/* <PieChart /> */}
            {/* <Demo /> */}
            <GridChart />

        </Fragment>
    );
}
