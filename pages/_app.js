import React from "react"
import { wrapper } from "../src/stores/configureStore"
import "../styles/tailwind.css"


const WrappedApp = ({ Component, pageProps }) => {
   return (
      <Component {...pageProps} />
   )
}

export default wrapper.withRedux(WrappedApp)
