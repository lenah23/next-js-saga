import Link from "next/link"
import { Layout } from "../Layout/mainLayout"

export default function Index() {
    return (<Layout>
        <h1>Hello Next.js!</h1>
        <p>hhhhhhhhhhhhhhhhhhhhhhh</p>
        <Link href={'/about'}><a>About</a></Link> <br />
        <Link href={'/posts'}><a>Posts</a></Link>
    </Layout>
    )
}