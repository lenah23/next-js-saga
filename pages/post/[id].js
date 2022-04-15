import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Layout } from '../../Layout/mainLayout';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';


export default function Post({ post: ServerPost }) {


    const singlePost = useSelector(state => state.posts.posts)

    return (<>
        <Layout>
            <h1>{post.title}</h1>
            <h2>{post.text}</h2>
            <Link href={'/posts'}><a>Back to all posts!</a></Link>
        </Layout>
    </> 
    )
}

