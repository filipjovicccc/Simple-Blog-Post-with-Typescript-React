import React, {useState} from "react";
import "./App.css";
import blogs from "./components/data";
import { Blogs } from "./modules/Blogs";
import BlogList from "./components/BlogList";

function App() {
  const [items, setItems] = useState<Blogs[]>(blogs)
 
  return (
    <div className="App">
      <h1>Hello from simple blog</h1>
     
      <BlogList items={items} />
    </div>
  );
}

export default App;
