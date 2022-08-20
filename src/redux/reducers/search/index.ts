import { NOTFOUND_SEARCH, SEARCH_ACTION, GET_SEARCH } from "redux/types/search";

const initialState = {
    search: null,
    isSuccess: false,
    isFound: false,
    isError: false,
    error: null,
}

const search = (state = initialState, action: any) => {
    switch (action.type){
        case SEARCH_ACTION:
            return {
                ...state,
                isSuccess: false
            }
        case GET_SEARCH:
            return {
                ...state,
                search: action.payload,
                isSuccess: true,
            }
        default:
            return { ...state }
    }
}

export default search;