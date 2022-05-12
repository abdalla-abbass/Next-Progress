import "../styles/globals.css";
import Header from "../Components/Header/Header";
import { Fragment } from "react/cjs/react.production.min";

function MyApp({ Component, pageProps }) {
    return (
        <Fragment>
            <Header />
            <Component {...pageProps} />
        </Fragment>
    );
}

export default MyApp;
