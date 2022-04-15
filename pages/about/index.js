import Router from "next/router"
import { Layout } from "../../Layout/mainLayout"

export default function About({title}) {
    return (<Layout title={'About page'}>
        <h1>{title}</h1>
        <button onClick={() => Router.push('/posts')}>Back to Home Page!</button>
    </Layout>
    )
}

About.getInitialProps = async () => {
    const response = await fetch("http://localhost:4200/about")
    const data = await response.json()

    return {
        title: data.title
    }
}