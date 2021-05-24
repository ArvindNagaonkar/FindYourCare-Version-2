import React from "react";
import blog1 from "../../assets/images/Precaution.png";
import blog2 from "../../assets/images/blackfungus.png";
import { Link as Rlink } from "react-router-dom";
import "./Blog.css";

function Blog() {
  return (
    <div className="Blog">
      <div className="blogImg">
        <Rlink className="blogImgLink" to="/first-blog">
          <img src={blog1} alt="" />
        </Rlink>
      </div>

      <div className="blogImg2">
        <a
          href="https://economictimes.indiatimes.com/news/et-explains/black-fungus-how-infection-starts-death-rate-treatment-medicine-other-key-things-to-know/articleshow/82796816.cms"
          rel="noreferrer"
          target="_blank"
        >
          <img src={blog2} alt="" />
        </a>
      </div>
    </div>
  );
}

export default Blog;
