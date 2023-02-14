import React from 'react'
import { AiOutlineStar } from 'react-icons/ai'
import { IconType } from 'react-icons/lib'
import "./DisplayBlogs.css"

type DisplayBlogsProps = {

 title : string,
 text: string,
 img: string,
 icons: IconType
 
}

const DisplayBlogs:React.FC<DisplayBlogsProps> =(props)=> {
  return (
    <article className='article'>
      <img className='images' src={props.img} alt="" />
      <div className='section'>
         <h2>{props.title}</h2>
         <AiOutlineStar />
      </div>
      <p>{props.text}</p>
    </article>
  )
}

export default DisplayBlogs
