"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface Post {
  id: number;
  attributes: {
    title: string;
    slug: string;
    content: string;
  };
}

const BlogPage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("https://your-strapi-instance/api/posts?sort[0]=publishedAt:desc");
        const data = await res.json();
        setPosts(data.data); // Strapi returns { data: [...] }
      } catch (err) {
        console.error(err);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="px-8 py-16 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-black dark:text-zinc-50">Blog</h1>
      <ul className="flex flex-col gap-6">
        {posts.map((post) => (
          <li key={post.id} className="p-4 border rounded hover:shadow-lg transition">
            <Link href={`/blog/${post.attributes.slug}`}>
              <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
                {post.attributes.title}
              </h2>
              <p className="text-zinc-700 dark:text-zinc-300 mt-2 line-clamp-3">
                {post.attributes.content.slice(0, 200)}...
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogPage;
