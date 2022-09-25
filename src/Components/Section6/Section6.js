import React from "react";
import Accordion from "react-bootstrap/Accordion";
import StyledButton from "../../StyledComponents/Button";

export default function Section6() {
  return (
    <div style={{paddingTop:"100px", paddingBottom:"100px"}}>
      <p className="spanColors text-center">NEED TO KNOW</p>
      <h1 className="allColor text-center">Frequently Asked Questions.</h1>
      <p className="fs-5 text-secondary text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mattis non
        accumsan in, <br /> tempor dictum neque.
      </p>

      <div className="justify-content-center row">
        <div className="col-lg-5 col-md-7 col-sm-12 mt-5">
        <Accordion defaultActiveKey={["0"]}  flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              What is the cost of an online course
            </Accordion.Header>
            <Accordion.Body>
               Create beautiful website with this Geeks UI template. Get started building a site today.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>What do I need to take o course</Accordion.Header>
            <Accordion.Body>
            Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>What do I receive for taking this course?</Accordion.Header>
            <Accordion.Body>
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>What will get if subscribe to this Certificate</Accordion.Header>
            <Accordion.Body>
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        </div>
      </div>

      <div className="text-center mt-5">
       <StyledButton className="mt-5">More questions? Visit the <span className="spanColors">Learner Help Center.</span></StyledButton>

      </div>

    </div>
  );
}
