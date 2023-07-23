import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import styles2 from '@/styles/Blog.module.css'
import BlogComponent from '@/components/blogComponent'
import * as fs from 'fs'

const inter = Inter({ subsets: ['latin'] })

export default function Home({blogData}) {
  const blogs = blogData
  return (
    <>
      <Head>
        <title>Hunting Coder</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.heading}>Hunting Coders</h1>
        <div className={styles.code}>A blog for hunting coders</div>
        <div className={styles.imagewrapper}>
          <Image src="/coder.webp" alt="Image of a coder" height={223.5} width={343} quality={70} priority={true}/>
        </div>
        <div><b>&lt; Hunting coder /&gt;</b></div>
        <div className={styles.popularblogs}>
          <h2>Popular Blogs</h2>
          <hr/>
          <div className={styles.blogs}>
          {blogs && blogs.map((blog)=>{
            return(
              <div className={styles.blogItem} key={blog.slug}>
              <Link href={`/blogpost/${blog.slug}`}>
            <h2>{blog.title}</h2></Link>
            <p>
              {blog.metadescription.substr(0,100)} ...
            </p>
              <Link href={`/blogpost/${blog.slug}`}>
                <button className={styles2.button}>Read more</button>
                </Link>
            </div>
            )
          })}
        </div>
        </div>
      </main>
    </>
  )
}

// export async function getServerSideProps(){
//   let response = await fetch('http://localhost:3000/api/allblogs?blogItems=3');
//   let blogData = await response.json()
//   return ({props:{blogData}})
// }
export async function getStaticProps(){
  const blogItems = 3;
    const data = fs.readdirSync('blogs');
    const blogData = []
    for(let file of data){
        const fileData = fs.readFileSync('blogs/'+file, 'utf8')
        blogData.push(JSON.parse(fileData))
        if(blogItems){
        if(data.indexOf(file) === blogItems-1){
        return ({props:{blogData}})
        }}
    }
  return ({props:{blogData}})
}