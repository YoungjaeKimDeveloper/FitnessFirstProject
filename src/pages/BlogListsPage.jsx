import React from "react";
import "./BlogListsPage.css";
import sampleImg from "../../public/assets/boxing.jpg";

const BlogListsPage = () => {
  return (
    <div className="blog-lists-layout">
      <div className="blog-lists-layout-header">
        <h1 className="blog-lists-layout-title">The Moments I Cherished</h1>
      </div>
      {/* Blog Lists */}
      <div className="blog-lists-layout-list">
        <img
          src={sampleImg}
          alt="blog-background-image"
          className="blog-background-image"
        />
        <div className="blog-list-content">
          <h1 className="blog-list-content-title">Headline</h1>
          <p className="blog-list-content-details">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus
            libero consequatur ab sed hic, aliquid magni beatae dolorum, porro
            labore debitis ullam!
          </p>
        </div>
      </div>
      <div className="blog-lists-layout-list">
        <img
          src={sampleImg}
          alt="blog-background-image"
          className="blog-background-image"
        />
        <div className="blog-list-content">
          <h1 className="blog-list-content-title">Headline</h1>
          <p className="blog-list-content-details">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus
            libero consequatur ab sed hic, aliquid magni beatae dolorum, porro
            labore debitis ullam!
          </p>
        </div>
      </div>
      <div className="blog-lists-layout-list">
        <img
          src={sampleImg}
          alt="blog-background-image"
          className="blog-background-image"
        />
        <div className="blog-list-content">
          <h1 className="blog-list-content-title">Headline</h1>
          <p className="blog-list-content-details">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus
            libero consequatur ab sed hic, aliquid magni beatae dolorum, porro
            labore debitis ullam!
          </p>
        </div>
      </div>
      <div className="blog-lists-layout-list">
        <img
          src={sampleImg}
          alt="blog-background-image"
          className="blog-background-image"
        />
        <div className="blog-list-content">
          <h1 className="blog-list-content-title">Headline</h1>
          <p className="blog-list-content-details">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus
            libero consequatur ab sed hic, aliquid magni beatae dolorum, porro
            labore debitis ullam!
          </p>
        </div>
      </div>
      <div className="blog-lists-layout-list">
        <img
          src={sampleImg}
          alt="blog-background-image"
          className="blog-background-image"
        />
        <div className="blog-list-content">
          <h1 className="blog-list-content-title">Headline</h1>
          <p className="blog-list-content-details">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus
            libero consequatur ab sed hic, aliquid magni beatae dolorum, porro
            labore debitis ullam!
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogListsPage;
