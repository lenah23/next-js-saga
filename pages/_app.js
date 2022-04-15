import '../styles/main.css'
import NextNProgress from 'nextjs-progressbar';
import { wrapper } from '../store';


function App({ Component, pageProps }) {

    return (
        <>
            <Component {...pageProps} />
            {/* <NextNProgress
                color="black"
                startPosition="0.3"
                stopDelayMs="200"
                height="3"
            /> */}
        </>
    )
}

export default wrapper.withRedux(App);
