import Head from 'next/head'
import { Layout } from '../Layout/mainLayout'
import Link from 'next/link'
import postTypes from '../store/types/posts'
import { wrapper } from '../store'
import { END } from 'redux-saga'
import { useSelector } from 'react-redux'


function Posts() {

    const posts = useSelector(state => state.posts.posts)

    console.log(posts, 'all posts');

    if (!posts) {
        return (
            <Layout>
                <h1>LOADING...</h1>
            </Layout>
        )
    }

    return (<Layout title={'Posts page'}>
        <Head>
            <title>Posts page</title>
            <meta name='description' content='this is a post page' />
            <meta name='keywords' content='next,javascript, nextjs, react' />
            <meta charSet='utf-8' />
        </Head>
        <h1>Posts page</h1>
        {
            // posts.map((post) => (
            //     <li key={post.id}>
            //         <Link href={`/post/[id]`} as={`/post/${post.id}`}><a>{post.title}</a></Link>
            //     </li>
            // ))
        }
    </Layout>
    )
}

export const getServerSideProps = wrapper.getServerSideProps(store => async ({ req, res, ...etc }) => {
    store.dispatch({
        type: postTypes.GET_POSTS
    });
    store.dispatch(END);
    await store.sagaTask.toPromise();
});

export default Posts