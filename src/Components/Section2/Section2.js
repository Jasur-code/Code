import React from 'react'
import {AiOutlineCheck} from "react-icons/ai"
import CheckSPan from '../../StyledComponents/CheckSPan'
export default function Section2() {
  return (
    <div className='d-flex  align-items-center justify-content-center shadow bg-light p-4 gap-5 flex-wrap'>
       <CheckSPan><AiOutlineCheck className='check'/>  Shareable Certificate</CheckSPan>
       <CheckSPan><AiOutlineCheck className='check'/>  Flexible Deadlines</CheckSPan>
       <CheckSPan><AiOutlineCheck className='check'/>  100% Online Courses</CheckSPan>
       <CheckSPan><AiOutlineCheck className='check'/>  Approx.24 hours</CheckSPan>
    </div>
  )
}
