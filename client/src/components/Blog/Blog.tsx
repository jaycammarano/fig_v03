import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { ALLBLOGS } from '../../GraphQL/queries';
import Layout from '../Layout/Layout';
import { Tag } from '../lib/types';
import BlogSummary from './BlogSummary';
type TBlogs = {
  blogs: TBlog[];
};
export type TBlog = {
  id: number;
  createdBy: string;
  createdAt: string;
  content: string;
  tags: Tag[];
  title: string;
};

const Blog = () => {
  const starterBlogs: TBlogs = {
    blogs: [
      {
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
      },
    ],
  };
  const [blogs, setBlogs] = useState(starterBlogs);

  const { error, loading, data } = useQuery(ALLBLOGS, {});

  useEffect(() => {
    setBlogs(data);
  }, [data]);
  const displayBlogs = blogs
    ? blogs.blogs.map((blogPost) => {
        return <BlogSummary blog={blogPost} />;
      })
    : '';
  return (
    <Layout>
      <div>
        <h1 className="m-4 my-8 mb-16 text-white text-7xl">Blog</h1>
        {displayBlogs}
      </div>
    </Layout>
  );
};

export default Blog;
