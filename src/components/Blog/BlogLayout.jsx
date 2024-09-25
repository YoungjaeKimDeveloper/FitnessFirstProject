import React from "react";
import "./BlogLayout.css";
import newImg from "../../../public/assets/fitness.jpg";
import sample1 from "../../../public/assets/boxing.jpg";
import sample2 from "../../../public/assets/kickBoxing.jpg";
import BlogMenu from "./BlogMenu";
const BlogLayout = () => {
  return (
    <div className="blog-layout">
      <div className="blog-layout-container">
        <div className="blog-main-title">News&Blogs</div>
        <BlogMenu />
        <div className="blog-news">
          <h1>Today's News</h1>
          <div className="blog-news-main">
            <img src={newImg} alt="news-img" className="blog-news-main-img" />
            <div className="blog-news-main-description">
              <h1>Blog Main Title</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Necessitatibus tempora architecto assumenda pariatur vitae, iure
                explicabo id voluptas quis iste.
              </p>
            </div>
          </div>
          <div className="blog-news-sub-layout">
            <div className="blog-news-sub-element">
              <img
                src={sample1}
                alt="blog-news-sub-element-img"
                className="blog-news-sub-element-img"
              />
              <div className="blog-news-sub-element-description">
                <h1>Title</h1>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Earum ipsum aliquam non, perferendis, aut hic est amet rerum
                  aperiam a vero eum!
                </p>
              </div>
            </div>
            <div className="blog-news-sub-element">
              <img
                src={sample1}
                alt="blog-news-sub-element-img"
                className="blog-news-sub-element-img"
              />
              <div className="blog-news-sub-element-description">
                <h1>Title</h1>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Earum ipsum aliquam non, perferendis, aut hic est amet rerum
                  aperiam a vero eum!
                </p>
              </div>
            </div>
            <div className="blog-news-sub-element">
              <img
                src={sample1}
                alt="blog-news-sub-element-img"
                className="blog-news-sub-element-img"
              />
              <div className="blog-news-sub-element-description">
                <h1>Title</h1>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Earum ipsum aliquam non, perferendis, aut hic est amet rerum
                  aperiam a vero eum!
                </p>
              </div>
            </div>
            <div className="blog-news-sub-element">
              <img
                src={sample1}
                alt="blog-news-sub-element-img"
                className="blog-news-sub-element-img"
              />
              <div className="blog-news-sub-element-description">
                <h1>Title</h1>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Earum ipsum aliquam non, perferendis, aut hic est amet rerum
                  aperiam a vero eum!
                </p>
              </div>
            </div>
            <div className="blog-news-sub-element">
              <img
                src={sample1}
                alt="blog-news-sub-element-img"
                className="blog-news-sub-element-img"
              />
              <div className="blog-news-sub-element-description">
                <h1>Title</h1>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Earum ipsum aliquam non, perferendis, aut hic est amet rerum
                  aperiam a vero eum!
                </p>
              </div>
            </div>
            <div className="blog-news-sub-element">
              <img
                src={sample1}
                alt="blog-news-sub-element-img"
                className="blog-news-sub-element-img"
              />
              <div className="blog-news-sub-element-description">
                <h1>Title</h1>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Earum ipsum aliquam non, perferendis, aut hic est amet rerum
                  aperiam a vero eum!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="blog-list">
          <p>BLog-list Part</p>
        </div>
        <div className="blog-weatherTodoList">
          <p>Weather-Part</p>
        </div>
        <div className="blog-footer">footer</div>
      </div>
    </div>
  );
};

export default BlogLayout;
