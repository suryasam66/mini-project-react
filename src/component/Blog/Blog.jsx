import React from "react";
import "../Blog/blog.css"
import photoa from "../../assets/a.jpg"
import photob from "../../assets/b.png"
import photoc from "../../assets/c.png"
const Blog = () => {
  return (
    <section className="blog-section">
      <div className="blog-header">
        <h2>Latest blog posts</h2>
        <p>Tools and strategies modern teams need to help their companies grow.</p>
        <a href="/all-posts" className="view-all">
          View all posts
        </a>
      </div>

      <div className="blog-cards">
        <div className="blog-card">
          <img
            src={photoa}
            alt="UX review presentations"
            className="blog-image"
          />
          <div className="blog-content">
            <span className="blog-category">Design</span>
            <h3>UX review presentations</h3>
            <p>
              How do you create compelling presentations that wow your
              colleagues and impress your managers?
            </p>
            <div className="blog-meta">
              <span>Olivia Rhye</span>
              <span>20 Jan 2024</span>
            </div>
          </div>
        </div>

        <div className="blog-card">
          <img
            src={photob}
            alt="Migrating to Linear 101"
            className="blog-image"
          />
          <div className="blog-content">
            <span className="blog-category">Product</span>
            <h3>Migrating to Linear 101</h3>
            <p>
              Linear helps streamline software projects, sprints, tasks, and
              bug tracking. Here's how to get started.
            </p>
            <div className="blog-meta">
              <span>Phoenix Baker</span>
              <span>19 Jan 2024</span>
            </div>
          </div>
        </div>

        <div className="blog-card">
          <img
            src={photoc}
            alt="Building your API stack"
            className="blog-image"
          />
          <div className="blog-content">
            <span className="blog-category">Software Engineering</span>
            <h3>Building your API stack</h3>
            <p>
              The rise of RESTful APIs has been met by a rise in tools for
              creating, testing, and managing them.
            </p>
            <div className="blog-meta">
              <span>Lana Steiner</span>
              <span>18 Jan 2024</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;