import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { postAdded } from "./postsSlice";
import { selectAllUsers } from "../users/usersSlice";

const AddPostForm = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");

  const users = useSelector(selectAllUsers);

  const onTitleChange = (e) => setTitle(e.target.value);
  const onContentChange = (e) => setContent(e.target.value);
  const onAuthorChange = (e) => setUserId(e.target.value);

  const onSavePostClicked = (e) => {
    e.preventDefault();
    dispatch(postAdded(title, content, userId));
    setTitle("");
    setContent("");
  };

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

  const userOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  return (
    <section>
      <h2>Add a new post</h2>
      <form onSubmit={onSavePostClicked}>
        <label htmlFor="title">Post Title:</label>
        <input id="title" type="text" value={title} onChange={onTitleChange} />

        <label htmlFor="author">Post Author:</label>
        <select id="author" value={userId} onChange={onAuthorChange}>
          <option value=""></option>
          {userOptions}
        </select>

        <label htmlFor="content">Post Content:</label>
        <textarea
          id="content"
          type="text"
          value={content}
          onChange={onContentChange}
        />

        <button type="submit" disabled={!canSave}>
          Save Post
        </button>
      </form>
    </section>
  );
};

export default AddPostForm;
