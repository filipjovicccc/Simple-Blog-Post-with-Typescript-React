import React, {useState} from "react";
import "./App.css";
import blogs from "./components/data";
import { Blogs } from "./modules/Blogs";
import BlogList from "./components/BlogList";
import NewBlog from "./components/NewBlog";

// type newItems = {
//   text: string,
//   title: string,
//   url:string
// }

function App() {
  const [items, setItems] = useState<Blogs[]>(blogs)
  const [showModal, setShowModal] = useState(false)
 
  const openBlogModal = () =>{
    setShowModal(true)
  }
  const closeBlogModal = () =>{
    setShowModal(false)
  }

 const addDataHandler = (newItems:Blogs) => {
     setItems([...items, newItems])
 }

  return (
    <div className="App">
      <h1>Hello from simple blog</h1>
      {
        showModal ?  <NewBlog closeModal={closeBlogModal} onAdd={addDataHandler}/> : 
        <button onClick={openBlogModal}>
         Open Modal
       </button>

      }
      
      <BlogList items={items} />
    </div>
  );
}

export default App;
