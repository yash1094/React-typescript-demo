import * as React from "react";
import "./styles.css";
import Test from "./components/test";

export default function App() {
  const url: string = "https://jsonplaceholder.typicode.com/posts";
  return (
    <div className="App">
      <h1>List of posts from </h1>
      <Test url={url} />
    </div>
  );
}
