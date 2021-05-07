import axios from "axios";
import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    axios(url)
      .then((data) => {
        return setPosts(data.data);
      })
      .catch((err) => err.message);
  }, []);
  return (
    <div>
      {posts.map((post) => (
        <BlogList post={post} key={post.id} />
      ))}
    </div>
  );
};

export default Blog;
