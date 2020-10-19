import React, { useState, useEffect } from "react";

type PostObject = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

interface Props {
  url: string;
}

function Test({ url }: Props) {
  const [posts, setPosts] = useState<PostObject[]>([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }, [url]);

  return (
    <div>
      {posts.map((p) => (
        <h3 key={p.id}>{p.title}</h3>
      ))}
    </div>
  );
}

export default Test;
