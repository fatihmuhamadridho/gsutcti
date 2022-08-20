import { NOTFOUND_SEARCH, SEARCH_ACTION, GET_SEARCH } from "redux/types/search";
import axios from "axios";
const baseUrl = "https://api.github.com/search/users?q="

export const getAllSearch = (params: any) => async(dispatch: any) => {
    try {
        console.log("params", params)
        dispatch({ type: SEARCH_ACTION })
        const res = await axios.get(`${baseUrl}${String(params)}`)
        dispatch({
            type: GET_SEARCH,
            payload: res.data,
        })
        console.log("data", res.data)
    } catch(error: any) {
        dispatch({
            type: NOTFOUND_SEARCH,
            payload: error
        })
        console.log(error.response.data.message)
    }
}