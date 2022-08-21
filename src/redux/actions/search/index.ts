import { NOTFOUND_SEARCH, SEARCH_ACTION, GET_SEARCH_PAGE, GET_SEARCH } from "redux/types/search";
import axios from "axios";
const baseUrl = "https://api.github.com/search/repositories?"

export const getPageSearch = ({ query, page }: any) => async(dispatch: any) => {
    try {
        console.log("params", query)
        dispatch({ type: SEARCH_ACTION })
        const res = await axios.get(`${baseUrl}q=${String(query)}&page=${page ? String(page) : "1"}`)
        dispatch({
            type: GET_SEARCH_PAGE,
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

export const getSearch = ({ query, page }: any) => async(dispatch: any) => {
    try {
        console.log("params", query)
        dispatch({ type: SEARCH_ACTION })
        const res = await axios.get(`${baseUrl}q=${String(query)}&page=${page ? String(page) : "1"}`)
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