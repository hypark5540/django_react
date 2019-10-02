import axios from "axios";

import { GET_DEMO, DELETE_DEMO, ADD_DEMO } from "./types";

// GET Demo
export const getDemo = () => dispatch => {
    axios
        .get("/api/demo")
        .then(res => {
            dispatch({
                type: GET_DEMO,
                payload: res.data
            });
        })
        .catch(err => console.log(err))
};

// Delete Demo
export const deleteDemo = id => dispatch => {
    axios
        .delete(`api/demo/${id}/`)
        .then(res => {
            dispatch({
                type: DELETE_DEMO,
                payload: id
            });
        })
        .catch(err => console.log(err));
};

export const addDemo = lead => dispatch => {
    axios
        .post(`api/demo/`, lead)
        .then(res => {
            dispatch({
                type: ADD_DEMO,
                payload: res.data
            });
        })
        .catch(err => console.log(err));
};