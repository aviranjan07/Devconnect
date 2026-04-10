import { useState } from "react";

function App() {
  const [post, setPost] = useState("");
  const [posts, setPosts] = useState([]);

  const addPost = () => {
    if (post.trim() === "") return;

    setPosts([...posts, post]);
    setPost("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>DevConnect 🚀</h1>

      <input
        type="text"
        placeholder="Write something..."
        value={post}
        onChange={(e) => setPost(e.target.value)}
      />

      <button onClick={addPost}>Post</button>

      <div>
        {posts.map((p, index) => (
          <p key={index}>{p}</p>
        ))}
      </div>
    </div>
  );
}

export default App;