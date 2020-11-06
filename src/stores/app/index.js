const initialState = {
   search: "",
   authors: [],
   list: [],
   activeTab: "filter",
}

const app = (state = initialState, action) => {
   switch (action.type) {
      case "APP_SET_LIST":
         return {
            ...state,
            list: [...state.list, ...action.payload],
         }
      case "APP_ADD_LIST":
         return {
            ...state,
            list: [...state.list, action.payload],
         }
      case "APP_SET_AUTHORS":
         return {
            ...state,
            authors: action.payload,
         }
      case "APP_SET_SEARCH":
         return {
            ...state,
            search: action.payload,
         }
      case "APP_SET_TAB":
         return {
            ...state,
            activeTab: action.payload,
         }
      default:
         return state
   }
}

export default app