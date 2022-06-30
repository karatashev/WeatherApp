const BlogPost = ({ title, description, img }) => {
  return (
    <div className="BlogPost">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <p> {description} </p>
    </div>
  );
};

export default BlogPost;
