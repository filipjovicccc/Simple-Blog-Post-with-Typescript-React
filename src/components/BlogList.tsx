import React from 'react'
import { Blogs } from '../modules/Blogs'
import DisplayBlogs from './DisplayBlogs'
import "./BlogList.css"

const BlogList:React.FC<{items: Blogs[]}> =(props)=> {
  
  return (
    <div className="blog-list">
      {props.items.map((item) => {
        return <DisplayBlogs 
        title ={item.title} 
        text={item.text} 
        key={item.id}
        img={item.img}
        icons={item.icons}
        />

      })
      }
    </div>
  )
}

export default BlogList
