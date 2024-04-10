import React from "react";
import BlogCard from "../components/BlogCard";

function Blog() {
  return (
    <section id="blog" className="flex flex-col min-h-svh w-full p-32">
      <div className="container-lg">
        <h1 className="text-black font-bold text-2xl mb-5">✒️ Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-16">
          <BlogCard />
          <BlogCard />
        </div>
      </div>
    </section>
  );
}

export default Blog;
