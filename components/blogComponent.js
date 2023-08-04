import React , {useEffect,useState} from 'react'
import styles from '@/styles/Blog.module.css'
import Link from 'next/link'
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from './spinner';


const BlogComponent = ({blogData,totalBlogs}) => {
  const [blogs, setBlogs] = useState(blogData);
  const [count,setCount] = useState(blogData.length)
  // useEffect(() => {
  //   fetch('http://127.0.0.1:3000/api/allblogs'+(blogItems?`?blogItems=${blogItems}`:'')).then((response)=>{
  //   return response.json()
  //   }).then((data)=>{
  //     setBlogs(data);
  //   })
  
  // }, [blogItems])

  const fetchData = async ()=>{
   setTimeout(async()=>{const res = await fetch(`/api/allblogs?blogItems=${count+1}`);
    setCount(count+1)
    const data = await res.json();
    setBlogs([...data]);},1300)
  }

  
  return (
<InfiniteScroll
  dataLength={blogs.length} //This is important field to render the next data
  next={fetchData}
  hasMore={false} //blogs.length != totalBlogs
  loader={<Spinner/>}
  className={styles.blogs}
  endMessage={
    <p style={{ textAlign: 'center' }}>
      <b>Yay! You have seen it all</b>
    </p>
  }
>
{blogs && blogs.map((blog)=>{
            return(
              <div className={styles.blogItem} key={blog.slug}>
              <Link href={`/blogpost/${blog.slug}`}>
            <h2>{blog.title}</h2></Link>
            <p>
              {blog.metadescription.substr(0,100)} ...
            </p>
              <Link href={`/blogpost/${blog.slug}`}>
                <button className={styles.button}>Read more</button>
                </Link>
            </div>
            )
          })}
</InfiniteScroll>
  )
  }
  export default BlogComponent;


