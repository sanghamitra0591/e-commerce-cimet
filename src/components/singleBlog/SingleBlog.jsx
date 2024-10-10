import { useParams } from 'react-router-dom';
import "./singleBlog.css";
import { useSelector } from 'react-redux';
import { selectBlogs } from '../../slice/BlogsSlice';

const SingleBlog = () => {
  const { blogId } = useParams();
  const blogs = useSelector(selectBlogs);
  const currentBlog = blogs.find((blog) => blog.id === Number(blogId));

  return (
    <div className="single-blog-container">
      <h1 className="blog-title">{currentBlog?.title}</h1>
      <p className="blog-body">{currentBlog?.body}</p>
    </div>
  );
};

export default SingleBlog;
