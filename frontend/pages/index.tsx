import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Homepage, HomepageAttributes, Post, PostAttributes, Posts } from '../cms'
import styles from '../styles/Home.module.css'
import { API_PATHS, fetchApi, fetchApiByPath } from '../utils/api'

interface HomepageProps {
  homepage: HomepageAttributes;
  posts: PostAttributes[];
}

const Home: NextPage<HomepageProps> = ({homepage, posts}) => {

  const {Title, BlogTitle, Summary, WelcomeTitle, Meta} = homepage;

  return Title ? (
    <div className={styles.container}>
      <Head>
        <title>{Title ?? 'Title'}</title>
        <meta name="description" content={Meta ?? 'Meta'}/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className={styles.main}>
        <h1 className={styles.title}>{WelcomeTitle}</h1>

        <p className={styles.description}>
          {Summary}
        </p>        

        <h2>{BlogTitle}</h2>
        <div className={styles.grid}>
        {posts.map((post, key: number) => {
          return (
              <a key={key} href={post.slug} className={styles.card}>
                <h2>{post.Title}</h2>
                <p>{post.Description}</p>
              </a>
            )
        })}
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </footer>
    </div>
  ) : <>Loading...</>
}

export const getStaticProps: GetStaticProps = async (context) => {
  const homepage = await fetchApiByPath<Homepage>(API_PATHS.HOMEPAGE);
  const posts = await fetchApiByPath<Posts>(API_PATHS.POSTS).then((data: Posts) => data.data.map((post: Post) => post.attributes));

  return {props: {
    homepage: homepage.data.attributes,
    posts: posts
  }}
}


export default Home

