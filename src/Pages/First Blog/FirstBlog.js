import React from "react";
import firstBlogIMg1 from "../../assets/images/who.jpg";
import firstBlogIMg2 from "../../assets/images/who1.jpg";
import firstBlogIMg3 from "../../assets/images/who2.jpg";
import "./FirstBlog.css";

function FirstBlog() {
  return (
    <div className="firstBlog">
      <div className="firstBlogImg1">
        <img src={firstBlogIMg1} alt="" />
      </div>
      <div className="fisrtBlogTextContainer">
        <h2>Protect yourself and others from COVID-19</h2>
        <p>
          If COVID-19 is spreading in your community, stay safe by taking some
          simple precautions, such as physical distancing, wearing a mask,
          keeping rooms well ventilated, avoiding crowds, cleaning your hands,
          and coughing into a bent elbow or tissue. Check local advice where you
          live and work. Do it all!
        </p>
        <h2>To prevent the spread of COVID-19</h2>
        <ol>
          <li>
            Clean your hands often. Use soap and water, or an alcohol-based hand
            rub.
          </li>
          <li>
            Maintain a safe distance from anyone who is coughing or sneezing.
          </li>
          <li>Wear a mask when physical distancing is not possible.</li>
          <li>Don’t touch your eyes, nose, or mouth.</li>
          <li>
            Cover your nose and mouth with your bent elbow or a tissue when you
            cough or sneeze.
          </li>
          <li>Stay home if you feel unwell.</li>
        </ol>
        <p>
          If you have a fever, cough, and difficulty breathing, seek medical
          attention. Calling in advance allows your healthcare provider to
          quickly direct you to the right health facility. This protects you and
          prevents the spread of viruses and other infections.
        </p>

        <h2>Masks</h2>
        <p>
          Masks can help prevent the spread of the virus from the person wearing
          the mask to others. Masks alone do not protect against COVID-19 and
          should be combined with physical distancing and hand hygiene. Follow
          the advice provided by your local health authority.
        </p>
        <div className="writer">
          <span>____Arbaaz Kadwekar</span>
        </div>
      </div>
      <div className="blogbottomImgs">
        <div className="bottomImg1">
          <img src={firstBlogIMg2} alt="" />
        </div>
        <div className="bottomImg2">
          <img src={firstBlogIMg3} alt="" />
        </div>
      </div>
    </div>
  );
}

export default FirstBlog;
