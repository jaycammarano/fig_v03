import DOMPurify from 'dompurify';
import React from 'react';
import { Link } from 'react-router-dom';
import { TBlog } from './Blog';
interface IBlogPost {
  blog: TBlog;
}
const BlogSummary: React.FC<IBlogPost> = ({ blog }) => {
  const dateCreated = new Date(blog.date_created);
  const summary = blog.contents.slice(0, 250).trim().concat('...');
  const sanitizer = DOMPurify.sanitize;
  const sanitized = sanitizer(summary);
  return (
    <div key={blog.id} className="m-4 text-white ">
      <div className="my-4 text-7xl">Blog</div>
      <Link to={`/blog/${blog.id}`}>
        <div className="text-4xl text-green-400">{blog.title}</div>
      </Link>
      <p className="my-4">
        <div
          dangerouslySetInnerHTML={{
            __html: sanitized,
          }}
        />
        <Link className="text-green-400" to={`/blog/${blog.id}`}>
          Read More
        </Link>{' '}
        - Published: {dateCreated.toLocaleDateString()}{' '}
      </p>
    </div>
  );
};

export default BlogSummary;
