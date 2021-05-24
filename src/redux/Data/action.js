import {ADD_DATA} from "./types";
import axios from "axios";


export const getData = () => (dispatch) => {
    const response = axios.get("https://boostnote.io/api/docs", {
        headers: {
            'Authorization': 'Bearer 35a617891c248c8b0f3b3d770eecc855ee3129ab76d437f0819a139c0d42c5ce',
            'Access-Control-Expose-Headers': '*'
}
    })

    response.then(data => dispatch(addData(data.data.docs)))
        .catch(error => console.error(error))
}

export const addData = (data) => {
    return {
        type: ADD_DATA,
        data
    }
}