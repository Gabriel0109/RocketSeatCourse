import Prismic from '@prismicio/client'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { getPrismicClient } from '../../services/prismic'
import styles from './styles.module.scss'





export default function Posts(){
    return (
        <>
        
        <Head>
            <title>Posts | Ignews</title>
        </Head>
        <main className={styles.container}>
            <div className={styles.posts}>
                <a href="">
                    <time>12 de março de 2021</time>
                    <strong>Creating a Monorepo with Lerna & Yarn WOrkspaces</strong>
                    <p>In this guide, you will learn how to create a Monorepo to manage multiple packages with a shared lorem ipsum</p>
                </a>
            </div>
        </main>
        </>
    )
}


export const getStaticProps: GetStaticProps = async () => {
    const prismic = getPrismicClient()


    const response = await prismic.query(
       [ Prismic.predicates.at('document.type' , 'posts')], {
        fetch: ['posts.title', 'posts.content'],
        pageSize: 100,
       }
    )
    console.log(JSON.stringify(response, null, 2))

    return {
        props: {}
    }
}