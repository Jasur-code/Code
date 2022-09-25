import React from "react";

export default function Card(props) {
  const data = props;
  return (
    <div
      className="bg-light shadow"
      style={{ width: "520px", padding: "25px 30px", borderRadius: "4px"}}
    >
      <div className="d-flex gap-3 flex-wrap">
        <img
          style={{
            background: "#6610f2",
            borderRadius: "50%",
            width: "60px",
            height: "60px",
          }}
          src={data.img}
          alt=""
        />
        <div>
          <h3 className="allColor">
            {data.h3}
            {data.span4 && (
              <span
                style={{
                  fontSize: "18px",
                  borderRadius: "4px",
                  background: "#FFAA46",
                  color: "#ffff",
                  padding: "4px 10px",
                }}
              >
                {data.span4}
              </span>
            )}
          </h3>
          <span style={{ fontSize: "13px", fontWeight: "bold" }}>
            {data.span1}
          </span>
          <span style={{ fontSize: "13px", marginLeft: "20px" }}>
            {data.span2}
          </span>
          <span style={{ fontSize: "13px", marginLeft: "20px" }}>
            {data.span3}
          </span>
        </div>
      </div>
      <p className="mt-4">{data.paragraph}</p>

      <a href="hhh">View Chapter Details +</a>
    </div>
  );
}
