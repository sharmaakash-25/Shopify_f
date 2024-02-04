import React from "react"
import "./Footer.scss"
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa"
import Payment from "../../assets/payments.png"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">About</div>
          <div className="text">At ShopiFy, we believe in more than just transactions; we believe in experiences. Our mission is to "create memorable moments through top-quality products and exceptional service".</div>
        </div>
        <div className="col">
          <div className="title">Contact</div>
          <div className="c-item">
            <FaLocationArrow />
            <div className="text">JAYPEE INSTITUTE OF INFORMATION TECHNOLOGY,NOIDA UTTAR PRADESH, 201309</div>
          </div>
          <div className="c-item">
            <FaMobileAlt />
            <div className="text">Phone: XXXXX 22643</div>
          </div>
          <div className="c-item">
            <FaEnvelope />
            <div className="text">Email: 21103093@mail.jiit.ac.in</div>
          </div>
        </div>
        <div className="col">
          <div className="title">Categories</div>
          <span className="text">Headphones</span>
          <span className="text">Smart Watches</span>
          <span className="text">Speakers</span>
          <span className="text">Earphones</span>
          <span className="text">Home Theatre</span>
          <span className="text">Projectors</span>
        </div>
        <div className="col">
          <div className="title">Pages</div>
          <span className="text">Home</span>
          <span className="text">About</span>
          <span className="text">Privacy Policy</span>
          <span className="text">Returns</span>
          <span className="text">Terms & Conditions</span>
          <span className="text">Contact Us</span>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
          <div className="text">SHOPIFY 2023/2024 CREATED BY AKASH. E-COMMERCE SOLUTIONS.</div>
          <img src={Payment} alt="" />
        </div>
      </div>
    </footer>
  )
}

export default Footer
