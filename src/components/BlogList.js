import BlogPost from "./BlogPost";

const blogData = [
  {
    id: 0,
    title: "Hello",
    description: "Hello description",
    img: "https://picsum.photos/300/200",
  },
  {
    id: 1,
    title: " Hi",
    description: "Hi description",
    img: "https://picsum.photos/300/200",
  },
  {
    id: 3,
    title: " Learn javascript",
    description: "Hello description",
    img: "https://picsum.photos/300/200",
  },
];

const BlogList = ({ sectionTitle }) => {
  return (
    <>
      <h2 className="title">{sectionTitle}</h2>
      <div className="Blog flex">
        {blogData.map((blog) => (
          <BlogPost
            title={blog.title}
            description={blog.description}
            key={blog.id}
            img={blog.img}
          />
        ))}
      </div>
    </>
  );
};

export default BlogList;
