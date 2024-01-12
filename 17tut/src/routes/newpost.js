import { useState } from "react";
import { Form, useNavigate, useOutletContext } from "react-router-dom";
import { format } from "date-fns";

const NewPost = () => {
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const navigate = useNavigate();

  const [posts, setPosts] = useOutletContext();

  const handleSubmit = () => {
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), "MMMM dd, yyyy pp");

    const newPost = {
      id,
      title: postTitle,
      datetime,
      body: postBody
    };

    setPosts([...posts, newPost]);
    setPostTitle("");
    setPostBody("");
    navigate("/");
  };

  return (
    <main className="NewPost">
      <h2>New Post</h2>
      <Form
        className="newPostForm"
        method="post"
        action="create"
        onSubmit={e => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <label htmlFor="postTitle">Title:</label>
        <input
          id="postTitle"
          type="text"
          required
          value={postTitle}
          onChange={e => setPostTitle(e.target.value)}
        />
        <label htmlFor="postBody">Post:</label>
        <textarea
          id="postBody"
          required
          value={postBody}
          onChange={e => setPostBody(e.target.value)}
        ></textarea>
        <button type="submit">Submit</button>
      </Form>
    </main>
  )
}

export default NewPost