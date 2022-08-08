import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import usePosts from '../../hooks/Fetch/usePosts'
import useSettings from '../../hooks/Fetch/useSettings'
import styles from '../../styles/Home.module.css'
import { fetchPosts, fetchSettings } from '../../utils/endpoints'

const Post: NextPage = () => {
const [data, setData] = useState({});

const {title} = useSettings();
const router = useRouter()

const slug = router.query.post?.toString()!;
const {posts} = usePosts({slug: 'first-post'});



console.log(router.query.slug)
  return posts ? (
    <div className={styles.container}>
      Post name {router.query.post}
      {/* <h1>{posts[0].Title}</h1> */}
    </div>
  ) : <></>
}

export default Post

