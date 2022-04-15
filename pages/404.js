import Link from "next/link";
import errorstyle from '../styles/404.module.css'

export default function ErrorPage() {
    return (
        <>
            <h1 className={errorstyle.error}>Error 404</h1>
            <p><Link href={'/'}><a>Go back to home page</a></Link></p>
        </>
    )
}