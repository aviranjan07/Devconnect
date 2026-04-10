import { useState } from "react";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  const [post, setPost] = useState("");
  const [posts, setPosts] = useState([]);

  const addPost = () => {
    if (post === "") return;
    setPosts([...posts, post]);
    setPost("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <Navbar />

      <h1>Welcome 🚀</h1>

      {/* Counter */}
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>

      {/* Input */}
      <div style={{ marginTop: "20px" }}>
        <input
          type="text"
          placeholder="Write something..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <p>You typed: {input}</p>
      </div>

      {/* Post System */}
      <div style={{ marginTop: "20px" }}>
        <h2>Create Post</h2>
        <input
          value={post}
          onChange={(e) => setPost(e.target.value)}
          placeholder="Write something..."
        />
        <button onClick={addPost}>Post</button>

        {posts.map((p, index) => (
          <p key={index}>{p}</p>
        ))}
      </div>
    </div>
  );
}

export default App;