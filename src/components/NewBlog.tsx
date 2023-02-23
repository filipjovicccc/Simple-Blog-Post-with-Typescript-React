import React from 'react'
import Modal from './UI/Modal'
import "./NewBlog.css"

const NewBlog:React.FC<{closeModal : any, onAdd: any}>= (props)=> {

    const submitHandler = (e: any) => {
       e.preventDefault(); 
       const title = e.target.title.value
       const text = e.target.text.value
       const url = e.target.url.value
      
       const blogData = {
         title: title,
         text: text,
         img: url
       }

       props.onAdd(blogData)
    
       
    }
  return (
    <Modal>
        <form onSubmit={submitHandler} className="form-control">
            <label>Enter title name</label>
            <input name="title" type="text" />
            <label>Enter blog text here</label>
            <input name="text" type="text"/>
            <label>Enter img url</label>
            <input name="url" type="url"/>

            <div className="btn-section">
                <button className='btn'>Submit</button>
                <button onClick={props.closeModal} className='btn'>Close</button>
             </div>
        </form>
      
    </Modal>
  )
}

export default NewBlog
