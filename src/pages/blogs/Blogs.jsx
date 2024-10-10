import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBlogs, selectBlogs, selectBlogsLoading } from '../../slice/BlogsSlice';
import BlogCard from '../../components/blogCard/BlogCard';
import Pagination from '../../components/pagination/Pagination';
import "./blogs.css";

const Blogs = () => {
  const dispatch = useDispatch();
  const blogs = useSelector(selectBlogs);
  const loading = useSelector(selectBlogsLoading);

  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 10;

  const endIndex = currentPage * blogsPerPage;
  const startIndex = endIndex - blogsPerPage;
  const currentPageBlogs = blogs.slice(startIndex, endIndex);

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <>
      <h2>Blogs</h2>
      <div className="blogsContainer">
        {currentPageBlogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
      <div className="pagination">
        <Pagination
          totalItems={blogs.length}
          itemsPerPage={blogsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </>
  );
};

export default Blogs;
