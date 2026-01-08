"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

interface Post {
  id: number;
  attributes: {
    title: string;
    content: string;
  };
}

const BlogPost: React.FC = () => {
  const { slug } = useParams();
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(`https://your-strapi-instance/api/posts?filters[slug][$eq]=${slug}`);
        const data = await res.json();
        if (data.data.length > 0) setPost(data.data[0]);
      } catch (err) {
        console.error(err);
      }
    };
    fetchPost();
  }, [slug]);

  if (!post) return <p className="text-center mt-8">Loading...</p>;

  return (
    <div className="px-8 py-16 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-black dark:text-zinc-50">{post.attributes.title}</h1>
      <div className="text-zinc-700 dark:text-zinc-300">{post.attributes.content}</div>
    </div>
  );
};

export default BlogPost;
