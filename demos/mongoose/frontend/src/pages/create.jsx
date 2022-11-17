import {useState,createContext} from "react";
import {Link} from "react-router-dom";

export function Create() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [done, setDone] = useState(false);
  async function handleSubmit(e) {
    e.preventDefault();
    const requestData = JSON.stringify({title, content});
    const headers = {"content-type": "application/json"};
    const request = await fetch("https://localhost:5173/create/");
    if (request.status != 500) {
      console.log("cant fetch");
    }
    else {
      const req = request.json();
      setTitle(req.title);
      setContent(req.content);
      setDone(true);
    }
    console.log(requestData);
  }
  if (done) {
    return (
      <div>
        <Link to="/view">Check out your blog post</Link>
      </div>
    );
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="title"
        value={title}
        onChange={(e) => setTitle(e.currentTarget.value)}
      />
      <div>
        <textarea
          value={content}
          onChange={(e) => setContent(e.currentTarget.value)}
        ></textarea>
      </div>
      <button>Post</button>
    </form>
  );
}
