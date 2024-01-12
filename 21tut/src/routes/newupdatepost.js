import { useState } from "react";
import { Form, useLocation } from "react-router-dom";

const NewPost = () => {
  const { state } = useLocation();
  const [postTitle, setPostTitle] = useState(state.post ? state.post.title : "");
  const [postBody, setPostBody] = useState(state.post ? state.post.body : "");

  return (
    <main className="NewPost">
      <h2>{state.pageTitle}</h2>
      <Form
        className="newPostForm"
        method="post"
        action={state.action}
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