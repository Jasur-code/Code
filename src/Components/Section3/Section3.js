import React from "react";
import Card from "../Card/Card";

export default function Section3() {
  return (
    <div style={{paddingTop:"100px",paddingBottom:"40px", background:"#F5F4F8"}}>
      <div className="text-center">
        <span className="spanColors fw-bold">COURSE DESCRIPTION</span>
        <h1 className="allColor fw-bold">What will you learn?</h1>
        <h5 className="text-secondary">
          Vanilla JS is a fast, lightweight, cross-platformframework for
          building incredible, <br /> powerful JavaScript applications.
        </h5>
      </div>

      <div className="d-flex gap-3 flex-wrap justify-content-center p-4">
        <Card
            img={"https://geeks-react.netlify.app/static/media/feature-icon-1.d81a3fc1e4004c4b67e31168c1898c64.svg"}
            h3={"Introduction to JavaScript"}
            span1={"COURSES - 1 "}
            span2={"6 LESSONS "}
            span3={"1 HOUR 12 MIN"}
            span4={"Free"}
            paragraph={"In et tempus dui, in porta dolor. Donec molestie a purus ut interdum. Donec quis felis dignissim, luctus libero ornare"}
        />
         <Card
            img={"https://geeks-react.netlify.app/static/media/feature-icon-2.35b3b77394deb3cd7ebf78b8464fab62.svg"}
            h3={"JavaScript Beginning"}
            span1={"COURSES - 2 "}
            span2={"4 LESSONS "}
            span3={"32 MIN"}
            paragraph={"Malesuada fames ac turpis egesta mpor tempus tincidunt. Aliquam congue lacus ac tellus consectetur malesuada."}
        />
         <Card
            img={"https://geeks-react.netlify.app/static/media/feature-icon-3.7cfb20a1964dfcd934da6b2267d68bc9.svg"}
            h3={"Variables and Constants"}
            span1={"COURSES - 3 "}
            span2={"8 LESSONS "}
            span3={"10 MIN"}
            paragraph={"Aliquam pulvinar eros a dictur vitae diam imperdiet, ornare turpis vequet elit nec, imperdiet lectuna liquam qs."}
        />
         <Card
            img={"https://geeks-react.netlify.app/static/media/feature-icon-4.4e54d5c3aeac9d9d151971629ba18abf.svg"}
            h3={"Types and Operators"}
            span1={"COURSES - 3 "}
            span2={"10 LESSONS "}
            span3={"32 MIN"}
            paragraph={"In lobortis quam eu augue spendisse imperdiet nec orci ipsum, tempus pharetra posuere imperdiet, lacinia a nisl."}
        />
    
      </div>
    </div>
  );
}
