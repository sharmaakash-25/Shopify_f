import "./Banner.scss"

import BannerImg from "../../../assets/banner-img.png"

const Banner = () => {
  return (
    <div className="hero-banner">
      <div className="content">
        <div className="text-content">
          <h1>SALES</h1>
          <p>Lorem ipsum is derived from the Latin "dolorem ipsum" roughly translated as "pain itself." Lorem ipsum presents the sample font and orientation of writing on web pages and other software applications where content is not the main concern of the developer.</p>
          <div className="ctas">
            <div className="banner-cta">Read More</div>
            <div className="banner-cta v2">Shop Now</div>
          </div>
        </div>
        <img className="banner-img" src={BannerImg} alt="" />
      </div>
    </div>
  )
}

export default Banner
