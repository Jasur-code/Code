import React from "react";

export default function Section5() {
  return (
    <div  style={{paddingTop:"150px",paddingBottom:"150px", background:"#F5F4F8"}} >
      <div className="text-center">
        <p className="spanColors fw-bold">TESTIMONIALS</p>
        <h1 className="allColor">What our learners are saying</h1>
        <p className="text-secondary fs-5">
          12+ million people are already learning on Geeks
        </p>
      </div>

      <div className="d-flex gap-4 justify-content-center flex-wrap mt-5">
        <div className="bg-light shadow rounded text-center mt-5" style={{ width: "500px" }}>
          <p className="p-4 fs-5">
            I started at stage zero. With Geeks I was able to start learning
            online and eventually build up enough knowledge and skills to
            transition into a well-paying career.
          </p>
          <div className="text-center bgBox pb-3">
            <img
              width={60}
              style={{ borderRadius: "50%", marginTop: "-30px" }}
              src="https://geeks-react.netlify.app/static/media/avatar-1.d2fd9642fd3628734b27.jpg"
              alt=""
            />
            <p className="m-0 text-light fw-bold fs-5">Barry Watson</p>
            <p className="m-0" style={{ color: "#B6A7FF" }}>
              Web Developer,UK
            </p>
          </div>
        </div>
        <div className="bg-light shadow rounded mt-5 text-center" style={{ width: "500px" }}>
          <p className="p-4 fs-5">
            Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Etiam vulputate euismod justo in consequat.
            Sed tempus elementum urnanisl et lacus.
          </p>
          <div className="text-center bgInfo pb-3">
            <img
              width={60}
              style={{ borderRadius: "50%", marginTop: "-30px" }}
              src="https://geeks-react.netlify.app/static/media/avatar-2.397cdd4b772a83b9166e.jpg"
              alt=""
            />
            <p className="m-0 text-light fw-bold fs-5">Linda Shenoy</p>
            <p className="m-0" style={{ color: "#B6A7FF" }}>
              Developer and Bootcamp Instructor
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
