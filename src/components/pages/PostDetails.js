import { Box, Button } from "@material-ui/core";
import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";

const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState([]);
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    axios(url)
      .then((data) => {
        return setPost(data.data);
      })
      .catch((err) => err.message);
  }, [id]);
  const history = useHistory();
  const goBack = () => {
    history.push("/");
  };
  return (
    <Box height="86.3vh" width="100%" color="cyan">
      <h1>Post No: {id} </h1>
      <h3> {post.title} </h3>
      <p> {post.body} </p>
      <div style={{ display: "flex" }} className="post-info">
        <div className="avatar">
          <img src="" alt="" />
        </div>
        <div className="comments">
          <p></p>
        </div>
      </div>
      <Button onClick={goBack} variant="contained" color="secondary">
        Go Back
      </Button>
    </Box>
  );
};

export default PostDetails;
