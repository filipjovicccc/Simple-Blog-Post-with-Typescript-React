import React from 'react'
import { Blogs } from './modals/Blogs'
import DisplayBlogs from './DisplayBlogs'

const BlogList:React.FC<{items: Blogs[]}> =(props)=> {
  return (
    <div >
      {props.items.map((item) => {
        return <DisplayBlogs key={item.id}/>
      })
      }
    </div>
  )
}

export default BlogList
