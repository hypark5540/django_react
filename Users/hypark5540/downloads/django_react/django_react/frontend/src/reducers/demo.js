import { GET_DEMO, DELETE_DEMO, ADD_DEMO } from "../actions/types.js";

const initialState = {
    demo: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_DEMO:
            return {
                ...state,
                demo: action.payload
            };
        case DELETE_DEMO:
            return {
                ...state,
                demo: state.leads.filter(demo => demo.id !== action.payload)
            };

        case ADD_DEMO:
            return {
                ...state,
                demo: [...state.demo, action.payload]
            };

        default:
            return state;
    }
}