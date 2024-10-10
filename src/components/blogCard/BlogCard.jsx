import { Link } from "react-router-dom";
import "./blogCard.css";

const BlogCard = ({ blog }) => {
  const { id, title, body } = blog;

  return (
    <div className="blog-card">
      <Link to={`/blogs/${id}`}>
        <h3 className="blog-title">{title}</h3>
        <p className="blog-body">{body}</p>
      </Link>
    </div>
  );
};

export default BlogCard;
