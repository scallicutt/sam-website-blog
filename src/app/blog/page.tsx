import React from "react";
import "./Blog.css";
import Link from "next/link";

async function getPosts() {
  const res = await fetch(
    "http://127.0.0.1:8090/api/collections/posts/records",
    {
      cache: "no-store",
    }
  );
  const data = await res.json();
  return data?.items as any[];
}

export default async function Blog() {
  const posts = await getPosts();

  return (
    <div className="blog-container">
      <div className="blog-banner">
        <h1>Welcome to My Blog!</h1>
        <h2>Go on and have a little read</h2>
      </div>
      <div className="post-grid">
        {posts?.map((post) => {
          return <Post key={post.id} post={post} />;
        })}
      </div>
    </div>
  );
}

function Post({ post }: any) {
  const { id, title, created } = post || {};

  return (
    <Link href={`/posts/${id}`}>
      <div className="post">
        <h2>{title}</h2>
        <p>{created}</p>
      </div>
    </Link>
  );
}
