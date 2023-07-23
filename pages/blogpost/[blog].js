import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "@/styles/BlogPost.module.css";
import * as fs from "fs";


const Slug = ({blogContent})=>{
    let blog = blogContent;
    // let [blog,setBlog] = useState();
//     const router = useRouter()
//     useEffect(()=>{
//     fetch(`http://127.0.0.1:3000/api/getblog?blog=${router.query.blog}`).then((response)=>{
//         return response.json()
//         }).then((data)=>{
//             if(data.error){
//                 data.title = "blog not found"
//             }
//             setBlogData(data);
//         })
// },[router.query])

    return(
        <>
      {blog && <div className={styles.container} key={blog.slug}>
    <h1 className={styles.heading}>{blog.title}</h1>
    <hr className={styles.hr}/>
    <p className={styles.blog} dangerouslySetInnerHTML={{__html:blog.content}}></p>
    </div>}
        </>
    )
}

// export async function getServerSideProps(){
//     let response = await fetch(`http://localhost:3000/api/getblog?blog=${req.params.blog}`);
//     let blogContent = await response.json()
//     return ({props:{blogContent}})
//   }

export const getStaticPaths = async () => {
    const allblogs = fs.readdirSync('blogs');
    const paths = [];
    for (let file of allblogs){
        paths.push(new Object({params:{blog:file.replace(".json", "")}}))
    }
    
    return {
      paths:paths,
      fallback: true, 
    }
  }

export async function getStaticProps(context){
    const blog = context.params.blog;
    let blogContent;
    try {
        blogContent = fs.readFileSync(`blogs/${blog}.json`, "utf8");
    } catch (err) {
      return ({props:{error:"file not found"}})
    }
    blogContent = JSON.parse(blogContent)
    return { props: {blogContent} }
  }

export default Slug;