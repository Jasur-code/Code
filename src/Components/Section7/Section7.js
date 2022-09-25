import React from 'react'
import StyledButton from '../../StyledComponents/Button'

export default function Section7() {
  return (
    <div  style={{backgroundImage:"url(https://miro.medium.com/max/1400/0*YA451MzeEsUZxIpj.jpg)", padding: "130px 0px 130px 0px"}}>
        <div className="text-center mt-4">
            <h2 className='text-light'>Join more than 1 million learners worldwide</h2>
            <p className='text-light fw-bold fs-4'>Effective learning starts with assessment. Learning a new skill is hard <br /> work—Signal makes it easier.</p>

            <div className='mt-5 d-flex flex-wrap gap-3 justify-content-center'>
                <StyledButton className=' bgBox text-light'>Start Learning for Free</StyledButton>
                <StyledButton className='bgInfo text-light'>Geeks for Business</StyledButton>
            </div>
        </div>
    </div>
  )
}
