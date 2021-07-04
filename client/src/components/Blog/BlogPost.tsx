import DOMPurify from 'dompurify';
import React, { useEffect, useState } from 'react';
import Layout from '../Layout/Layout';
import { TBlog } from './Blog';

const BlogPost = (id: number) => {
  const starterBlog: TBlog = {
    id: 1,
    title: 'rizzla + blk.adonis - Battyjack EP',
    content:
      'Bringing back 90s club culture and dancehall with this slick Lisa Hyper sample.',
    createdBy: 'spaghettios',
    createdAt: '2021-07-03T02:47:47.548Z',
    tags: [
      {
        name: 'rizzla',
      },
    ],
  };
  const [blog, setBlog] = useState(starterBlog);

  async function fetchData() {
    const response = await fetch(`http://localhost:8055/items/blog/${id}`);
    const data = await response.json();
    setBlog(data);
  }
  useEffect(() => {
    fetchData();
  }, []);
  const sanitizer = DOMPurify.sanitize;
  const sanitized = sanitizer(blog.content);

  const dateCreated = new Date(blog.createdAt);
  return (
    <Layout>
      <div className="m-4 text-white">
        <div className="text-4xl font-bold text-green-400">{blog.title}</div>
        <p className="my-4">
          <div
            dangerouslySetInnerHTML={{
              __html: sanitized,
            }}
          />
        </p>
        <p className="text-sm">
          Published: {dateCreated.toLocaleDateString()}{' '}
        </p>
      </div>
    </Layout>
  );
};

export default BlogPost;
