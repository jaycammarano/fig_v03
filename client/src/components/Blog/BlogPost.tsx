import DOMPurify from 'dompurify';
import React, { useEffect, useState } from 'react';
import { TBlog } from './Blog';

const BlogPost = (id: number) => {
  const starterBlog: TBlog = {
    id: 3,
    status: '',
    sort: null,
    user_created: 'cbd6842f-cff3-4d93-b380-3252b0e664a0',
    date_created: '2021-06-26T22:56:12-04:00',
    user_updated: 'cbd6842f-cff3-4d93-b380-3252b0e664a0',
    date_updated: '2021-06-26T23:15:40-04:00',
    content: '',
    title: '',
  };
  const [blog, setBlog] = useState({ data: starterBlog });

  async function fetchData() {
    const response = await fetch(`http://localhost:8055/items/blog/${id}`);
    const data = await response.json();
    setBlog(data);
  }
  useEffect(() => {
    fetchData();
  }, []);
  const sanitizer = DOMPurify.sanitize;
  const sanitized = sanitizer(blog.data.content);

  const dateCreated = new Date(blog.data.date_created);
  return (
    <div className="m-4 text-white">
      <div className="text-4xl font-bold text-green-400">{blog.data.title}</div>
      <p className="my-4">
        <div
          dangerouslySetInnerHTML={{
            __html: sanitized,
          }}
        />
      </p>
      <p className="text-sm">Published: {dateCreated.toLocaleDateString()} </p>
    </div>
  );
};

export default BlogPost;
