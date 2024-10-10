import { useParams } from 'react-router-dom';
import "./singleBlog.css";
import { useSelector } from 'react-redux';
import { selectBlogs } from '../../slice/BlogsSlice';

const SingleBlog = () => {
  const { blogId } = useParams();
  const blogs = useSelector(selectBlogs);
  const currentBlog = blogs.find((blog) => blog.id === Number(blogId));

  return (
    <div className='singleBlogWrapper'>
      <div className='singleBlogContainer'>
        <h2>{currentBlog?.title}</h2>
        <p>{currentBlog?.body}</p>
      </div>
    </div>
  );
};

export default SingleBlog;
