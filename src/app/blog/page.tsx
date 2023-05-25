import React from "react";
import "./Blog.css";
import Link from "next/link";

async function getPosts() {
  const post_data = await fetch(
    "http://127.0.0.1:8090/api/collections/posts/records",
    {
      cache: "no-store",
    }
  );

  // const post_image = await fetch(
  //   "http://127.0.0.1:8090/api/collections/posts/records/id?thumb=100x300"
  // )

  const data = await post_data.json();
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
  const { id, post_image, title, created } = post || {};

  console.log(post);
  return (
    <Link href={`/posts/${id}`}>
      <div className="post">
        <img
          src={`http://127.0.0.1:8090/api/files/posts/${id}/${post_image}`}
          id="post-image"
        />
        <h2>{title}</h2>
        <p>{created}</p>
      </div>
    </Link>
  );
}
