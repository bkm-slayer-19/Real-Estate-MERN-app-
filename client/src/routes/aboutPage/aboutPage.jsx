import "./aboutPage.scss";

function AboutPage() {
  return (
    <div className="aboutPage">
      <div className="heroSection">
        <div className="textContainer">
          <div className="wrapper">
            <h1 className="title">About LamaEstate</h1>
            <p>
              Welcome to LamaEstate, your premier destination for finding the perfect property. 
              We are dedicated to making your real estate journey smooth, transparent, and successful.
            </p>
            <div className="boxes">
              <div className="box">
                <h1>16+</h1>
                <h2>Years of Experience</h2>
              </div>
              <div className="box">
                <h1>200</h1>
                <h2>Award Gained</h2>
              </div>
              <div className="box">
                <h1>2000+</h1>
                <h2>Property Ready</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="imgContainer">
          <img src="/bg.png" alt="" />
        </div>
      </div>
      
      <div className="features">
        <div className="wrapper">
          <h2>Why Choose LamaEstate?</h2>
          <div className="feature">
            <img src="/search.png" alt="" />
            <div className="featureText">
              <span>Smart Search</span>
              <p>Find your dream property with our advanced search filters and location-based recommendations.</p>
            </div>
          </div>
          <div className="feature">
            <img src="/chat.png" alt="" />
            <div className="featureText">
              <span>24/7 Support</span>
              <p>Our dedicated team is always here to help you with any questions or concerns.</p>
            </div>
          </div>
          <div className="feature">
            <img src="/save.png" alt="" />
            <div className="featureText">
              <span>Save Favorites</span>
              <p>Keep track of properties you love and get notified about price changes and updates.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;