import React, { useEffect, useState } from "react";
import styles from "@/styles/Blog.module.css";
import Link from "next/link";
import BlogComponent from "@/components/blogComponent";
import * as fs from "fs";

const Blogs = (props) => {
  return (
    <div className={styles.blogs}>
      <h1>Blogs</h1>
      <BlogComponent {...props} />
    </div>
  );
};

// export async function getServerSideProps(){
//   let response = await fetch('http://localhost:3000/api/allblogs');
//   let blogData = await response.json()
//   return ({props:{blogData}})
// }
export async function getStaticProps() {
  const blogItems = 4;
  const data = fs.readdirSync("blogs");
  const blogData = [];
  for (let file of data) {
    const fileData = fs.readFileSync("blogs/" + file, "utf8");
    blogData.push(JSON.parse(fileData));
    if (blogItems) {
      if (data.indexOf(file) === blogItems - 1) {
        return { props: { blogData,totalBlogs:data.length, } };
      }
    }
  }
  return { props: { blogData,totalBlogs:data.length, } };
}

export default Blogs;
