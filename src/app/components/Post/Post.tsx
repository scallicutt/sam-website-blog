"use client";
import React, { useEffect, useState } from "react";
import PocketBase from "pocketbase";

const pb = new PocketBase("http://127.0.0.1:8090");

const Post = () => {
  const [post, setPost] = useState<any[]>([]);
  useEffect(() => {
    async function fetchData() {
      const records = await pb.collection("posts").getFullList({
        sort: "-created",
      });
      console.log(records);
      setPost(records);
    }
    fetchData();
  }, []);

  return <div>{JSON.stringify(post)}</div>;
};

export default Post;
