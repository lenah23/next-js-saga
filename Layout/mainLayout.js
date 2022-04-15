import Link from "next/dist/client/link"
import Head from "next/dist/shared/lib/head"

export function Layout({ children, title = 'Next.js' }) {
    return (
        <>
            <Head>
                <title>{title} | Next Course</title>
            </Head>
            <nav>
                <Link href={'/'}><a>Home</a></Link>
                <Link href={'/about'}><a>About</a></Link>
                <Link href={'/posts'}><a>Posts</a></Link>
            </nav>
            <main>
                {children}
            </main>
            <style jsx>{`
                nav {
                    height: 60px;
                    background: darkblue;
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                }

                nav a{
                    color: white;
                    text-decoration: none;
                }
            `}</style>
        </>
    )
}