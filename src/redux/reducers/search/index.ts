import { NOTFOUND_SEARCH, GET_SEARCH_PAGE, SEARCH_ACTION, GET_SEARCH } from "redux/types/search";

const initialState = {
    searchs: null,
    search: null,
    isSuccess: false,
    isFound: false,
    isLoading: false,
    isError: false,
    error: null,
}

const search = (state = initialState, action: any) => {
    switch (action.type){
        case SEARCH_ACTION:
            return {
                ...state,
                isSuccess: false,
                isLoading: true,
            }
        case GET_SEARCH_PAGE:
            return {
                ...state,
                searchs: action.payload,
                isSuccess: true,
                isLoading: false,
            }
        case GET_SEARCH:
            return {
                ...state,
                search: action.payload,
                isSuccess: true,
                isLoading: false,
            }
        case NOTFOUND_SEARCH:
            return {
                ...state,
                isError: true,
                error: action.payload
            }
        default:
            return { ...state }
    }
}

export default search;