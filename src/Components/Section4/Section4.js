import React from "react";

export default function Section4() {
  return (
    <div   style={{marginTop:"140px", padding:"24px"}}>
      <div className=" section4 d-flex gap-5 justify-content-center flex-wrap">
        <div style={{width:"500px"}}>
          <p className="spanColors">YOUR INSTRUCTOR</p>
          <h1 className="allColor">Hi, I'm James Davies, I will be taking you through lessons.</h1>
          <p>Create beautiful website with this Geeks UI template. Get started building a site today.</p>
          <hr  className="mt-5"/>
        <div className="d-flex gap-4 mt-3">
            <div>
                <h2 className="fw-bold allColor m-0">45</h2>
                <span className="m-0">Lesson</span>
            </div>
            <div>
                <h2 className="fw-bold allColor m-0">10,500+</h2>
                <span className="m-0">Students</span>
            </div>
            <div>
                <h2 className="fw-bold allColor m-0">12+</h2>
                <span className="m-0">Learning Hours</span>
            </div>
        </div>
        </div>
        <div style={{width:"400px"}}>
            <img src="https://geeks-react.netlify.app/static/media/instructor-img.1ed9cc40ee4734876e12.png" alt="" />
        </div>
      </div>

      <div style={{marginTop:"170px"}}>
        <p className="spanColors fw-bold text-center" style={{letterSpacing:"2px"}}>TRUSTED BY TOP-TIER PRODUCT COMPANIES</p>
        <div className="d-flex gap-5 justify-content-center mt-5 flex-wrap">
            <img src="https://geeks-react.netlify.app/static/media/gray-logo-stripe.3d4095cb6e5725f47918b560794f28ff.svg" alt="" />
            <img src="https://geeks-react.netlify.app/static/media/gray-logo-airbnb.7ae2c76b073d54d58c84060e25026c99.svg" alt="" />
            <img src="https://geeks-react.netlify.app/static/media/gray-logo-discord.04b33527e93d593d4dddc17c1b433aa2.svg" alt="" />
            <img src="https://geeks-react.netlify.app/static/media/gray-logo-intercom.89c85d324d492710ca01cac5ee8363f5.svg" alt="" />
            <img src="https://geeks-react.netlify.app/static/media/gray-logo-pinterest.caf3876a8c4887c3ce26ef6d74172e2a.svg" alt="" />
            <img src="https://geeks-react.netlify.app/static/media/gray-logo-netflix.5b0aff628289b0ac23e64681e4140e5d.svg" alt="" />
        </div>
      </div>
    </div>
  );
}
