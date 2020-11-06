export const appSetList = payload => ({ type: "APP_SET_LIST", payload })
export const appSetAuthors = payload => ({ type: "APP_SET_AUTHORS", payload })

export const appSetTab = payload => ({ type: "APP_SET_TAB", payload })

export const appSetSearch = payload => ({ type: "APP_SET_SEARCH", payload })

export const appAddList = payload => async (dispatch, getState) => {
   dispatch({ type: "APP_ADD_LIST", payload })
   return getState().app.list
}
