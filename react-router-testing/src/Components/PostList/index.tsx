import { useContext } from "react";
import { Post } from "../Post/index";
import { PostForm } from "../PostForm/index";
import { AppContext } from "../Context/AppContext";

export const PostList = () => {
  const { posts } = useContext(AppContext);

  return posts.length > 0 ? (
    <>
      <PostForm />
      <ul>
        {posts.map((post) => (
          <Post key={post.id} {...post} />
        ))}
      </ul>
    </>
  ) : (
    <h1>"Brak informacji o postach"</h1>
  );
};