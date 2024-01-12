import { Form, useLocation } from "react-router-dom";
import { useStoreActions, useStoreState } from "easy-peasy";

const NewPost = () => {
  const { state } = useLocation();
  const postTitle = useStoreState(state => state.postTitle);
  const postBody = useStoreState(state => state.postBody);
  const setPostTitle = useStoreActions(actions => actions.setPostTitle);
  const setPostBody = useStoreActions(actions => actions.setPostBody);

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