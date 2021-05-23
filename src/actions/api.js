import axios from "axios";

export const getData = () => {
    return async(dispatch) => {
        const response = axios.get("https://boostnote.io/api/docs")
    }
}