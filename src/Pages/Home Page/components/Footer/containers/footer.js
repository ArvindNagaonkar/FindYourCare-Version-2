import React from "react";
import Footer from "../components/footer";
import Icon from "../components/icons";

export function FooterContainer() {
  return (
    <Footer>
      <Footer.Wrapper>
        <Footer.Row>
          <Footer.Column>
            <Footer.Title className="footer__img">
              <img src="findyourcare_logo.png" alt=""></img>
            </Footer.Title>

            <p
              style={{
                fontSize: "15px",
                lineHeight: "normal",
                letterSpacing: "2px",
                color: "white",
              }}
            >
              FindYourCare aims at helping you find some of the best Medical
              Healthcare's in India, also providing yoou with a wide range of
              Healthcareproducts &Emergency Service Fac
            </p>
            <span style={{ color: "white" }}>Maharashtra,India</span>
            <br />
            <Footer.Link href="#">info@findyourcare.app</Footer.Link>
            <Footer.Link href="#"> +91 82910 61060</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Services</Footer.Title>
            <Footer.Link href="#">Oxygen Cylinder</Footer.Link>
            <Footer.Link href="#">Oxygen Concentartion</Footer.Link>
            <Footer.Link href="#">Blood Bank</Footer.Link>
            <Footer.Link href="#">Plasma Blood</Footer.Link>
            <Footer.Link href="#">Doctor Consultancy</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Quick Links</Footer.Title>
            <Footer.Link href="#">Services</Footer.Link>
            <Footer.Link href="#">About Us</Footer.Link>
            <Footer.Link href="#">Blog</Footer.Link>
            <Footer.Link href="#">Contact Us</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Social</Footer.Title>
            <Footer.Link href="#">
              <Icon className="fab fa-facebook-f" />
              Facebook
            </Footer.Link>
            <Footer.Link href="#">
              <Icon className="fab fa-instagram" />
              Instagram
            </Footer.Link>
            <Footer.Link href="#">
              <Icon className="fab fa-youtube" />
              Youtube
            </Footer.Link>
            <Footer.Link href="#">
              <Icon className="fab fa-twitter" />
              Twitter
            </Footer.Link>
          </Footer.Column>
        </Footer.Row>
      </Footer.Wrapper>
    </Footer>
  );
}
