import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBlogs, selectBlogs, selectBlogsLoading } from '../../slice/BlogsSlice';
import Pagination from '../../components/pagination/Pagination';
import "./blogs.css";
import { useNavigate } from 'react-router-dom';

const Blogs = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const blogs = useSelector(selectBlogs);
  const loading = useSelector(selectBlogsLoading);

  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 10;

  const endIndex = currentPage * blogsPerPage;
  const startIndex = endIndex - blogsPerPage;
  const currentPageBlogs = blogs.slice(startIndex, endIndex);

  const handleClick = (id) => {
    navigate(`/blogs/${id}`);
  }

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  if (loading) {
    return <div className="loading"><img src="https://cdn.pixabay.com/animation/2022/07/31/05/09/05-09-47-978_512.gif" alt="loader" /></div>
  }

  return (
    <div className='blogsWrapper'>
      <h1>Blogs</h1>
      <div className="pagination">
        <Pagination
          totalItems={blogs.length}
          itemsPerPage={blogsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
      <div className='blogsContainer'>
        {currentPageBlogs.map(blog => (
          <div key={blog.id} onClick={() => handleClick(blog.id)}>
            <h2>{blog.title.split(" ").slice(0, 3).join(" ")}</h2>
            <p>{blog.body.substring(0, 900)}...</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
