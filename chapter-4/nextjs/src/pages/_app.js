import Header from "@/components/Header";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App({ Component, pageProps }) {
    return (
        <>
            <Header />

            <Component {...pageProps} />
        </>
    );
}
