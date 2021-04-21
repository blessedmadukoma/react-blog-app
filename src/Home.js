import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState(null);

  const [name, setName] = useState('mario');

  
  // Useful for fetching
  useEffect(() => {
    fetch('http://localhost:8000/blogs').then(resp => {
      return resp.json();
    }).then((data) => {
      console.log(data);
      setBlogs(data);
    })
  }, []);

  return ( 
    <div className="home">
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
    </div>
   );
}
 
export default Home;