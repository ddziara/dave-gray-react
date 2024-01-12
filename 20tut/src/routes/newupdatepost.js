import { useState } from "react";
import { Form, useLocation/*useNavigate, useOutletContext*/ } from "react-router-dom";

const NewPost = () => {
  const { state } = useLocation();
  const [postTitle, setPostTitle] = useState(state.post ? state.post.title : "");
  const [postBody, setPostBody] = useState(state.post ? state.post.body : "");
  // const navigate = useNavigate();

  // const [posts, setPosts] = useOutletContext();

  /*  const handleSubmit = () => {
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
  */
  return (
    <main className="NewPost">
      <h2>{state.pageTitle}</h2>
      <Form
        className="newPostForm"
        method="post"
        action={state.action}
        onSubmit={e => {
          // e.preventDefault();
          // handleSubmit();
        }}
      >
        <label htmlFor="postTitle">Title:</label>
        <input
          id="postTitle"
          type="text"
          name="title"
          required
          value={postTitle}
          onChange={e => setPostTitle(e.target.value)}
        />
        <label htmlFor="postBody">Post:</label>
        <textarea
          id="postBody"
          required
          name="body"
          value={postBody}
          onChange={e => setPostBody(e.target.value)}
        ></textarea>
        <button type="submit">Submit</button>
      </Form>
    </main>
  )
}

export default NewPost